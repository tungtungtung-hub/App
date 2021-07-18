import mongoose, { Schema, Document } from 'mongoose';

export interface OrderDoc extends Document{

    orderID: string,
    items: [any], //
    totalAmount: number,
    orderDate: Date,
    paidThrough: string, // METHOD PAYMENT
    paymentResponse: string, // CHECK STATUS PAYMENT
    orderStatus: string,

}

const OrderSchema = new Schema({

    orderID: { type: String, required: true },
    items: [
        {
            food: { type: Schema.Types.ObjectId, ref: "food", required: true },
            unit: { type: Number, required: true }
        }
    ], //
    totalAmount: { type: Number, required: true },
    orderDate: { type: Date },
    paidThrough: { type: String }, 
    paymentResponse: { type: String }, 
    orderStatus: { type: String },

},{
    toJSON: {
        transform(doc, ret){
            delete ret.__v,
            delete ret.createdAt,
            delete ret.updatedAt
        }
    },
    timestamps: true
})

const Order = mongoose.model<OrderDoc>('order', OrderSchema);

export { Order };