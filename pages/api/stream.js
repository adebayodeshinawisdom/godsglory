import { getSession } from 'next-auth/react';
import Stream from '../../model/Stream';

import db from '../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
 
  const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
  const postHandler = async (req, res, user) => {
    await db.connect();
    const newStream = new Stream({
      ...req.body,
      username: user._id,
     
    });
  
    const stream = await newStream.save();
    await db.disconnect();
    res.send({ message: 'Product created successfully', stream });
  };
 

  export default handler;