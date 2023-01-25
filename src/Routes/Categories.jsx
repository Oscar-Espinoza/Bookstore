import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  useEffect(() => () => {}, [status]);
  return (
    <>
      <h2>{status}</h2>
      <button className="primary-button-big" type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </>
  );
}
