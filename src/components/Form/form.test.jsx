import { render, screen, fireEvent } from "@testing-library/react";
import Form from ".";

test("kosullarin onaylanma durumuna gore buton aktifligi", () => {
  //1) Test edilecek bileşen render edilir
  render(<Form />);

  //2) Gerekli elementleri çağır (checkbox | button)
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  //3) Checkbox tiklenmemiş mi kontrol et
  expect(checkbox).not.toBeChecked();

  //4) Button inaktif mi kontrol et
  expect(button).toBeDisabled();

  //5) Checkbox'ı tikle
  fireEvent.click(checkbox);

  //6) Buton aktif mi kontrol et
  expect(button).toBeEnabled();

  //7) Checkbox'tan tiki kaldır
  fireEvent.click(checkbox);

  //8) Buton inaktif mi kontrol et
  expect(button).toBeDisabled();
});

test("butonun hover durumuna gore bildirim gorunur", () => {
  //1-renderla
  render(<Form />);

  //2- gerekli elementleri  al
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/size gerçekten/i);

  //3-bildirimin ekranda olmadığını kontrol et
  expect(alert).not.toBeVisible();

  //4-checkbox'i tikle
  fireEvent.click(checkbox);

  //5- Mouse'u butonun üzerine getir
  fireEvent.mouseEnter(button);

  //6-ekranda bildirim var mı kontrol et
  expect(alert).toBeVisible();

  //7-mouse'u butondan çek
  fireEvent.mouseLeave(button);

  //8-bildirimin ekranda olmadığını kontrol et
  expect(alert).not.toBeVisible();
});
