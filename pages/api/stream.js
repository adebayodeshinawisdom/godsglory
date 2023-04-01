import { getSession } from 'next-auth/react';
import Stream from '../../model/Stream';

import db from '../../utils/db';

const handler = async (req, res) => {

  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
  const postHandler = async (req, res) => {
    await db.connect();
    const newStream = new Stream({
      ...req.body,
     
     
    });
  
    const stream = await newStream.save();
    await db.disconnect();
    res.send({ message: 'Product created successfully', stream });
  };

  const getHandler = async (req, res, user) => {

    await db.connect();
    
    const stream = await Stream.find({}).sort({_id: -1}).limit(1)
    await db.disconnect();
    res.send(stream);
    
    
    
    
    };

  export default handler;