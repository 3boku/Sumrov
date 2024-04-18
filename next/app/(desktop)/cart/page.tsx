import { cart } from "./colums";
import { getServerSession } from "next-auth";
import { authOptions } from "@/util/authOption";
import { redirect } from "next/navigation";
import CartInner from "./_components/cart-inner";
import { connectDB } from "@/lib/database";
import { ObjectId } from "mongodb";
import { fetchPaymentData } from "@/lib/utils";

const data: cart[] = [
  {
    id: "1",
    name: "Lorem ipsum dolor sit",
    price: 10000,
    amount: 1,
    color: "블랙",
    size: "L",
    image: "asd",
  },
  {
    id: "1",
    name: "Lorem ipsum dolor sit",
    price: 10000,
    amount: 1,
    color: "블랙",
    size: "L",
    image: "asd",
  },
];

const Cart = async () => {
  const db = (await connectDB).db("sumrov");
  const session = await getServerSession(authOptions);
  const result = await db
    .collection("cart")
    .find({ UserUuid: new ObjectId(session?.user._id) })
    .toArray();
  const data = await Promise.all(
    result.map((ai) => fetchPaymentData(ai.OriginUuid))
  );
  !session && redirect("/login");
  console.log(data);
  return data && <CartInner data={data} />;
};

export default Cart;
