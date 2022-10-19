npm testDROP TABLE matheus.installment;
DROP TABLE matheus.transactions;
CREATE TABLE matheus.transactions (
  code text PRIMARY KEY,
  amount numeric,
  number_installments integer,
  payment_method text,
  date timestamp DEFAULT NOW()
);

CREATE TABLE matheus.installment (
  code text REFERENCES matheus.transactions (code),
  number integer,
  amount numeric,
  PRIMARY KEY (code, number)
)