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

export class Project extends Document{
    @Prop()
    Title:string;
    @Prop()
    Description:string
    @Prop()
    Language:string
    @Prop()
    ImageUrl:string
    @Prop()
    CreatedByGuid:string
}

const schema=SchemaFactory.createForClass(Project);
export const projectSchema=schema;