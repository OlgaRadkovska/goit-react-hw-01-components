import PropTypes from 'prop-types';

import TBodyRow from './TBodyRow';

import { StyledTable } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => (
  <>
    {items.length > 0 ? (
      <StyledTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TBodyRow
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </StyledTable>
    ) : (
      <p className="warning">Nothing was transferred</p>
    )}
  </>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
