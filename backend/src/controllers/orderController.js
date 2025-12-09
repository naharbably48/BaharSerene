import { Order } from '../models/Order.js';
import { Product } from '../models/Product.js';
import { Coupon } from '../models/Coupon.js';
import {
  generateOrderNumber,
  calculateDeliveryCharge,
  calculateDiscount,
} from '../utils/helpers.js';

export const createOrder = async (req, res, next) => {
  try {
    const { items, shippingAddress, paymentMethod, couponCode } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty',
      });
    }

    // Calculate subtotal
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product ${item.productId} not found`,
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `${product.name} is out of stock`,
        });
      }

      const itemSubtotal = product.price * item.quantity;
      subtotal += itemSubtotal;

      orderItems.push({
        productId: product._id,
        productName: product.name,
        quantity: item.quantity,
        price: product.price,
        subtotal: itemSubtotal,
      });
    }

    // Apply coupon
    let discountApplied = { couponCode: null, discountAmount: 0 };

    if (couponCode) {
      const coupon = await Coupon.findOne({
        code: couponCode.toUpperCase(),
        isActive: true,
        startDate: { $lte: new Date() },
        endDate: { $gte: new Date() },
      });

      if (coupon) {
        const discount = calculateDiscount(coupon, subtotal);
        discountApplied = {
          couponCode: coupon.code,
          discountAmount: discount,
        };

        // Increment usage
        coupon.usedCount += 1;
        await coupon.save();
      }
    }

    // Calculate delivery charge
    const deliveryCharge = calculateDeliveryCharge(subtotal);

    // Calculate total
    const totalAmount =
      subtotal - discountApplied.discountAmount + deliveryCharge;

    // Create order
    const order = new Order({
      orderNumber: generateOrderNumber(),
      userId: req.userId,
      items: orderItems,
      subtotal,
      discountApplied,
      deliveryCharge,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });

    await order.save();

    // Update product stock
    for (const item of orderItems) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order,
    });
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.userId })
      .populate('items.productId')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      'items.productId'
    );

    if (!order || order.userId.toString() !== req.userId.toString()) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { orderStatus, paymentStatus } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        ...(orderStatus && { orderStatus }),
        ...(paymentStatus && { paymentStatus }),
      },
      { new: true }
    );

    res.json({
      success: true,
      message: 'Order updated successfully',
      order,
    });
  } catch (error) {
    next(error);
  }
};
