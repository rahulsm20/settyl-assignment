import { ItemType } from "./store/itemSlice";

export type User = {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
};

export type Item = {
  item: {
    _id: ObjectId;
    name: string;
    price: number;
    seller: {
      username: string;
      email: string;
    };
    image:{
      url:string;
    }
    createdAt: string;
    updatedAt: string;
  };
};

export type RootState = {
  itemData:{
    items:ItemType[]
    item:ItemType|undefined
    bids: BidType[],
    highestBid:BidType
  },
  authData:{
    authenticated:boolean,
    user:{
      username:string;
      email:string
    }
  }
}

export type BidType = {
  item_id:string;
  price:number
  user:{
    username:string;
    email:string;
  }
}