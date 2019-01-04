CREATE VIEW v_prices
AS
SELECT
  commodities.name AS "Commodity",
  commodities.type AS "Type",
  locations.name AS "Location",
  buy_price AS "Buy Price",
  sell_price AS "Sell Price"
FROM `commodity_prices`
INNER JOIN commodities ON commodities.cid = commodity_prices.fk_cid
INNER JOIN locations on locations.lid = commodity_prices.fk_lid;