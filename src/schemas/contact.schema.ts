import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps:true,
    toJSON:{
        transform: function (doc: any, ret: any) {
            ret.RecordID = ret._id
            delete ret._id
            delete ret.__v;
            return ret;
          },
    }
})

export class Contact extends Document{
    @Prop()
    Name:string;
    @Prop()
    Email:string
    @Prop()
    Subject:string
    @Prop()
    Message:string
    @Prop()
    CreatedByGuid:string
}

const schema=SchemaFactory.createForClass(Contact);
export const ContactSchema=schema;