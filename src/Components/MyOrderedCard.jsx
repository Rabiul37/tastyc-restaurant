import PropTypes from "prop-types";
const MyOrderedCard = ({ order }) => {
  const { name, price, quantity, buyerName, buyerEmail, date } = order || {};
  const totalprice = (price * quantity).toFixed(2);

  return (
    <>
      {/* row 1 */}
      <tr className="text-md font-philosopher font-semibold text-[18px] bg-[#000000e8] text-gray-300">
        <th className="pl-2 cursor-pointer w-2 text-gray-200 hover:bg-gray-200 p-1 hover:text-red-500 hover:rounded-full">
          X
        </th>
        <td className="p-5">{name}</td>
        <td className="p-5">{buyerName}</td>
        <td className="p-5">{buyerEmail}</td>
        <td className="p-5">{quantity}</td>
        <td className="p-5">{price}</td>
        <td className="p-5">{totalprice}</td>
        <td className="p-5">{date}</td>
      </tr>
    </>
  );
};

export default MyOrderedCard;
MyOrderedCard.propTypes = {
  order: PropTypes.object,
};
