import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class Registration{
    @Prop()
    Username:string;
    @Prop()
    Password:string
}

const schema=SchemaFactory.createForClass(Registration);
export const registationSchema=schema;