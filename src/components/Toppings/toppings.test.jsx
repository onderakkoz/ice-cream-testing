import userEvent from "@testing-library/user-event";
import Toppings from ".";
import { render, screen } from "@testing-library/react";

test("sosları ekleme ve çıkarma işleminin toplam fiyata etkisi", async () => {
  const user = userEvent.setup();

  // 1). Billeseni renderla
  render(<Toppings />);

  //2) butun sos checkboxlarını al
  const toppings = await screen.findAllByRole("checkbox");

  //3) toplam spanı al
  const total = screen.getByTestId("total");

  //4)  tüm checkboxların tiksiz olduğunu kontrol etmen lazım toBeCheckedelemanlar tiksiz diye kontrol eder

  toppings.forEach((i) => expect(i).not.toBeChecked());

  //5) toplam ücret 0 mı kontrol et
  expect(total.textContent).toBe("0");

  //6) soslardan birine tıkla
  await user.click(toppings[4]);

  //7) toplam ücret 3 mü kontrol et
  expect(total.textContent).toBe("3");

  // 8) farklı bir sos tıkla
  await user.click(toppings[0]);

  //9) toplam ücret 6 mı kontrol et
  expect(total.textContent).toBe("6");

  //10) soslardan birinin tikini kaldır
  await user.click(toppings[0]);

  //11) toplam ücret 3 mü kontrol et
  expect(total.textContent).toBe("3");

  //12) soslardan birinin tikini kaldır
  await user.click(toppings[4]);
  //13) toplam ücret 0 mı kontrol et
  expect(total.textContent).toBe("0");
});
