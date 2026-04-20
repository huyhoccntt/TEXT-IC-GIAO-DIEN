// data_toan11.js - Dữ liệu kiến thức và câu hỏi Toán 11

const math11Topics = [
  {
    id: 1,
    title: "Hàm số lượng giác cơ bản",
    topic: "Lượng giác - Hàm số",
    grade_level: 11,
    content: `📐 HÀM SỐ y = sin x
• Tập xác định: D = R
• Tập giá trị: [-1; 1]
• Hàm số lẻ, chu kỳ tuần hoàn T = 2π

📐 HÀM SỐ y = cos x
• Tập xác định: D = R
• Tập giá trị: [-1; 1]
• Hàm số chẵn, chu kỳ tuần hoàn T = 2π

📐 HÀM SỐ y = tan x
• Tập xác định: D = R \\ {π/2 + kπ}
• Tập giá trị: R
• Hàm số lẻ, chu kỳ tuần hoàn T = π

📐 HÀM SỐ y = cot x
• Tập xác định: D = R \\ {kπ}
• Tập giá trị: R
• Hàm số lẻ, chu kỳ tuần hoàn T = π`,
    questions: [
      { text: "Hàm số y = sin x có tập giá trị là:", options: ["[-1; 1]", "[0; 1]", "R", "[-2; 2]"], correct: 0 },
      { text: "Hàm số y = cos x là hàm số:", options: ["Chẵn", "Lẻ", "Không chẵn không lẻ", "Vừa chẵn vừa lẻ"], correct: 0 },
      { text: "Chu kỳ của hàm số y = tan x là:", options: ["π", "2π", "π/2", "2π/3"], correct: 0 },
      { text: "Hàm số y = sin x có tập xác định là:", options: ["R", "R\\{kπ}", "R\\{π/2+kπ}", "[0;2π]"], correct: 0 },
      { text: "Hàm số nào sau đây là hàm lẻ?", options: ["y = sin x", "y = cos x", "y = |sin x|", "y = cos²x"], correct: 0 },
      { text: "Giá trị lớn nhất của hàm số y = 2sin x + 1 là:", options: ["3", "2", "1", "0"], correct: 0 },
      { text: "Hàm số y = tan x không xác định tại:", options: ["x = π/2 + kπ", "x = kπ", "x = π/2", "x = 0"], correct: 0 },
      { text: "Chu kỳ của hàm số y = cos x là:", options: ["2π", "π", "π/2", "2π/3"], correct: 0 },
      { text: "Hàm số y = cot x là hàm số:", options: ["Lẻ", "Chẵn", "Không chẵn không lẻ", "Vừa chẵn vừa lẻ"], correct: 0 },
      { text: "Tập giá trị của hàm số y = 3cos x - 1 là:", options: ["[-4; 2]", "[-3; 3]", "[-2; 4]", "[-1; 1]"], correct: 0 }
    ]
  },
  {
    id: 2,
    title: "Công thức lượng giác mở rộng",
    topic: "Lượng giác - Công thức",
    grade_level: 11,
    content: `📌 CÔNG THỨC CỘNG:
• sin(a ± b) = sin a cos b ± cos a sin b
• cos(a ± b) = cos a cos b ∓ sin a sin b
• tan(a ± b) = (tan a ± tan b)/(1 ∓ tan a tan b)

📌 CÔNG THỨC NHÂN ĐÔI:
• sin2a = 2sin a cos a
• cos2a = cos²a - sin²a = 2cos²a - 1 = 1 - 2sin²a
• tan2a = 2tan a/(1 - tan²a)

📌 CÔNG THỨC NHÂN BA:
• sin3a = 3sin a - 4sin³a
• cos3a = 4cos³a - 3cos a

📌 CÔNG THỨC HẠ BẬC:
• sin²a = (1 - cos2a)/2
• cos²a = (1 + cos2a)/2

📌 CÔNG THỨC BIẾN ĐỔI TỔNG THÀNH TÍCH:
• cos a + cos b = 2cos((a+b)/2)cos((a-b)/2)
• sin a + sin b = 2sin((a+b)/2)cos((a-b)/2)`,
    questions: [
      { text: "sin 2a bằng:", options: ["2sin a cos a", "sin²a - cos²a", "1 - 2sin²a", "2cos²a - 1"], correct: 0 },
      { text: "cos 2a không bằng biểu thức nào sau đây?", options: ["2sin a cos a", "cos²a - sin²a", "2cos²a - 1", "1 - 2sin²a"], correct: 0 },
      { text: "sin(α + β) bằng:", options: ["sinα cosβ + cosα sinβ", "sinα cosβ - cosα sinβ", "cosα cosβ - sinα sinβ", "cosα cosβ + sinα sinβ"], correct: 0 },
      { text: "cos(α - β) bằng:", options: ["cosα cosβ + sinα sinβ", "cosα cosβ - sinα sinβ", "sinα cosβ - cosα sinβ", "sinα cosβ + cosα sinβ"], correct: 0 },
      { text: "Biểu thức sin²a bằng:", options: ["(1 - cos2a)/2", "(1 + cos2a)/2", "1 - cos²a", "1 - sin²a"], correct: 0 },
      { text: "Biểu thức cos²a bằng:", options: ["(1 + cos2a)/2", "(1 - cos2a)/2", "1 - sin²a", "sin²a - 1"], correct: 0 },
      { text: "sin a cos b bằng:", options: ["1/2[sin(a+b) + sin(a-b)]", "1/2[sin(a+b) - sin(a-b)]", "1/2[cos(a+b) + cos(a-b)]", "1/2[cos(a-b) - cos(a+b)]"], correct: 0 },
      { text: "cos a + cos b bằng:", options: ["2cos((a+b)/2)cos((a-b)/2)", "2sin((a+b)/2)cos((a-b)/2)", "2cos((a+b)/2)sin((a-b)/2)", "2sin((a+b)/2)sin((a-b)/2)"], correct: 0 },
      { text: "sin 3a bằng:", options: ["3sin a - 4sin³a", "4sin³a - 3sin a", "3sin a + 4sin³a", "3cos a - 4cos³a"], correct: 0 },
      { text: "Biểu thức (sin a + cos a)² bằng:", options: ["1 + sin2a", "1 - sin2a", "1 + cos2a", "1 - cos2a"], correct: 0 }
    ]
  },
  {
    id: 3,
    title: "Phương trình lượng giác cơ bản",
    topic: "Lượng giác - Phương trình",
    grade_level: 11,
    content: `📌 PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN:

• sin u = sin v ⇔ [u = v + k2π; u = π - v + k2π]

• cos u = cos v ⇔ u = ±v + k2π

• tan u = tan v ⇔ u = v + kπ

• cot u = cot v ⇔ u = v + kπ

📌 CÁC TRƯỜNG HỢP ĐẶC BIỆT:
• sin u = 0 ⇔ u = kπ
• sin u = 1 ⇔ u = π/2 + k2π
• cos u = 0 ⇔ u = π/2 + kπ
• cos u = 1 ⇔ u = k2π`,
    questions: [
      { text: "Phương trình sin x = 0 có nghiệm là:", options: ["x = kπ", "x = π/2 + kπ", "x = k2π", "x = π + k2π"], correct: 0 },
      { text: "Phương trình cos x = 1 có nghiệm là:", options: ["x = k2π", "x = π + k2π", "x = π/2 + kπ", "x = kπ"], correct: 0 },
      { text: "Phương trình tan x = 1 có nghiệm là:", options: ["x = π/4 + kπ", "x = π/4 + k2π", "x = π/4", "x = π/4 + kπ/2"], correct: 0 },
      { text: "Phương trình sin x = 1 có nghiệm là:", options: ["x = π/2 + k2π", "x = π/2 + kπ", "x = kπ", "x = π + k2π"], correct: 0 },
      { text: "Phương trình cos x = 0 có nghiệm là:", options: ["x = π/2 + kπ", "x = kπ", "x = π/2 + k2π", "x = k2π"], correct: 0 },
      { text: "Phương trình sin x = sin(π/3) có nghiệm là:", options: ["x = π/3 + k2π hoặc x = 2π/3 + k2π", "x = π/3 + kπ", "x = π/3 + k2π", "x = 2π/3 + k2π"], correct: 0 },
      { text: "Phương trình tan x = 0 có nghiệm là:", options: ["x = kπ", "x = π/2 + kπ", "x = k2π", "x = π + k2π"], correct: 0 },
      { text: "Phương trình cos x = -1 có nghiệm là:", options: ["x = π + k2π", "x = k2π", "x = π/2 + kπ", "x = kπ"], correct: 0 },
      { text: "Phương trình sin x = -1 có nghiệm là:", options: ["x = -π/2 + k2π", "x = π/2 + k2π", "x = π + k2π", "x = kπ"], correct: 0 },
      { text: "Điều kiện để phương trình a sin x + b cos x = c có nghiệm là:", options: ["a² + b² ≥ c²", "a² + b² ≤ c²", "a + b ≥ c", "a + b ≤ c"], correct: 0 }
    ]
  },
  {
    id: 4,
    title: "Cấp số cộng và cấp số nhân",
    topic: "Dãy số",
    grade_level: 11,
    content: `📌 CẤP SỐ CỘNG (CSC):
• Định nghĩa: u_(n+1) = u_n + d (d là công sai)
• Số hạng tổng quát: u_n = u₁ + (n-1)d
• Tính chất: 2u_k = u_(k-1) + u_(k+1)
• Tổng n số hạng đầu: S_n = n/2(u₁ + u_n) = n/2[2u₁ + (n-1)d]

📌 CẤP SỐ NHÂN (CSN):
• Định nghĩa: u_(n+1) = u_n.q (q là công bội)
• Số hạng tổng quát: u_n = u₁.q^(n-1)
• Tính chất: u_k² = u_(k-1).u_(k+1)
• Tổng n số hạng đầu: S_n = u₁(1 - q^n)/(1 - q) (q ≠ 1)
• Tổng CSN lùi vô hạn: S = u₁/(1 - q) (|q| < 1)`,
    questions: [
      { text: "Công thức số hạng tổng quát của cấp số cộng là:", options: ["u_n = u₁ + (n-1)d", "u_n = u₁.q^(n-1)", "u_n = u₁ + nd", "u_n = u₁.q^n"], correct: 0 },
      { text: "Công thức số hạng tổng quát của cấp số nhân là:", options: ["u_n = u₁.q^(n-1)", "u_n = u₁ + (n-1)d", "u_n = u₁.q^n", "u_n = u₁ + nd"], correct: 0 },
      { text: "Tổng n số hạng đầu của cấp số cộng là:", options: ["S_n = n/2[2u₁ + (n-1)d]", "S_n = n/2[2u₁ + nd]", "S_n = n(u₁ + u_n)", "S_n = u₁(1 - q^n)/(1 - q)"], correct: 0 },
      { text: "Tổng của cấp số nhân lùi vô hạn có |q| < 1 là:", options: ["S = u₁/(1 - q)", "S = u₁/(1 + q)", "S = u₁/(q - 1)", "S = u₁.q/(1 - q)"], correct: 0 },
      { text: "Cho CSC có u₁ = 2, d = 3. Số hạng thứ 5 là:", options: ["14", "17", "11", "8"], correct: 0 },
      { text: "Cho CSN có u₁ = 2, q = 3. Số hạng thứ 4 là:", options: ["54", "18", "6", "162"], correct: 0 },
      { text: "Tính chất của cấp số cộng là:", options: ["2u_k = u_(k-1) + u_(k+1)", "u_k² = u_(k-1).u_(k+1)", "u_k = u_(k-1) + u_(k+1)", "2u_k = u_(k-1).u_(k+1)"], correct: 0 },
      { text: "Tính chất của cấp số nhân là:", options: ["u_k² = u_(k-1).u_(k+1)", "2u_k = u_(k-1) + u_(k+1)", "u_k = u_(k-1) + u_(k+1)", "u_k² = u_(k-1) + u_(k+1)"], correct: 0 },
      { text: "Cho CSC: 3, 7, 11, 15,... Công sai d là:", options: ["4", "3", "5", "2"], correct: 0 },
      { text: "Cho CSN: 2, 6, 18, 54,... Công bội q là:", options: ["3", "2", "4", "1/3"], correct: 0 }
    ]
  },
  {
    id: 5,
    title: "Giới hạn dãy số",
    topic: "Giới hạn",
    grade_level: 11,
    content: `📌 GIỚI HẠN DÃY SỐ:
• lim(1/n) = 0; lim(1/n^k) = 0
• lim q^n = 0 (|q| < 1)
• lim(u_n ± v_n) = a ± b
• lim(u_n.v_n) = a.b
• lim(u_n/v_n) = a/b (b ≠ 0)

📌 GIỚI HẠN HÀM SỐ CƠ BẢN:
• lim x = x₀ (x→x₀)
• lim C = C
• lim(1/x) = 0 (x→±∞)

📌 KHỬ DẠNG VÔ ĐỊNH:
• 0/0: Phân tích nhân tử hoặc nhân liên hợp
• ∞/∞: Chia tử và mẫu cho lũy thừa bậc cao nhất`,
    questions: [
      { text: "lim(1/n) khi n→∞ bằng:", options: ["0", "1", "∞", "Không xác định"], correct: 0 },
      { text: "lim(3n² + 2n + 1)/(n² + 1) khi n→∞ bằng:", options: ["3", "2", "1", "∞"], correct: 0 },
      { text: "lim x² khi x→2 bằng:", options: ["4", "2", "0", "∞"], correct: 0 },
      { text: "lim (x² - 4)/(x - 2) khi x→2 bằng:", options: ["4", "2", "0", "1"], correct: 0 },
      { text: "lim (√(x+1) - 1)/x khi x→0 bằng:", options: ["1/2", "0", "1", "∞"], correct: 0 },
      { text: "lim (3x² - 2x + 1) khi x→1 bằng:", options: ["2", "1", "3", "0"], correct: 0 },
      { text: "lim q^n khi |q| < 1 bằng:", options: ["0", "1", "∞", "Không xác định"], correct: 0 },
      { text: "lim (1/n²) khi n→∞ bằng:", options: ["0", "1", "∞", "Không xác định"], correct: 0 },
      { text: "lim (n² + 2n)/(2n² + 1) bằng:", options: ["1/2", "1", "2", "0"], correct: 0 },
      { text: "lim (n + 1)/n bằng:", options: ["1", "0", "∞", "Không xác định"], correct: 0 }
    ]
  },
  {
    id: 6,
    title: "Đạo hàm",
    topic: "Đạo hàm",
    grade_level: 11,
    content: `📌 ĐỊNH NGHĨA ĐẠO HÀM:
f'(x₀) = lim_(x→x₀) [f(x) - f(x₀)]/(x - x₀)

📌 QUY TẮC TÍNH ĐẠO HÀM:
• (u ± v)' = u' ± v'
• (u.v)' = u'v + uv'
• (u/v)' = (u'v - uv')/v²
• (k.u)' = k.u'

📌 BẢNG ĐẠO HÀM CƠ BẢN:
• (C)' = 0
• (xⁿ)' = n.xⁿ⁻¹
• (1/x)' = -1/x²
• (√x)' = 1/(2√x)
• (sin x)' = cos x
• (cos x)' = -sin x
• (tan x)' = 1/cos²x
• (cot x)' = -1/sin²x`,
    questions: [
      { text: "Đạo hàm của hàm số y = x³ là:", options: ["3x²", "x²", "3x³", "x³/3"], correct: 0 },
      { text: "Đạo hàm của hàm số y = sin x là:", options: ["cos x", "-sin x", "-cos x", "sin x"], correct: 0 },
      { text: "Đạo hàm của hàm số y = 1/x là:", options: ["-1/x²", "1/x²", "-1/x", "1/x"], correct: 0 },
      { text: "Đạo hàm của hàm số y = cos x là:", options: ["-sin x", "sin x", "-cos x", "cos x"], correct: 0 },
      { text: "Đạo hàm của hàm số y = √x là:", options: ["1/(2√x)", "2√x", "1/√x", "√x/2"], correct: 0 },
      { text: "Đạo hàm của hàm số y = tan x là:", options: ["1/cos²x", "-1/cos²x", "1/sin²x", "-1/sin²x"], correct: 0 },
      { text: "Đạo hàm của hàm số y = (x² + 1)² là:", options: ["4x(x² + 1)", "2(x² + 1)", "4x³ + 2x", "2x(x² + 1)"], correct: 0 },
      { text: "Đạo hàm của hàm số y = sin(2x) là:", options: ["2cos(2x)", "cos(2x)", "-2cos(2x)", "-cos(2x)"], correct: 0 },
      { text: "Đạo hàm của hàm số y = e^x là:", options: ["e^x", "x.e^(x-1)", "ln x", "1/x"], correct: 0 },
      { text: "Đạo hàm của hàm số y = ln x là:", options: ["1/x", "x", "e^x", "1"], correct: 0 }
    ]
  },
  {
    id: 7,
    title: "Hình học không gian",
    topic: "Hình học không gian",
    grade_level: 11,
    content: `📌 XÁC ĐỊNH MẶT PHẲNG:
• 3 điểm không thẳng hàng
• 1 đường thẳng và 1 điểm ngoài
• 2 đường thẳng cắt nhau

📌 VỊ TRÍ TƯƠNG ĐỐI:
• Hai đường thẳng: song song, cắt nhau, chéo nhau
• Đường thẳng và mặt phẳng: song song, cắt nhau, nằm trong
• Hai mặt phẳng: song song, cắt nhau, trùng nhau

📌 QUAN HỆ SONG SONG:
• Đường thẳng // mặt phẳng: không nằm trong mp và // với 1 đường thẳng trong mp

📌 QUAN HỆ VUÔNG GÓC:
• Hai đường thẳng ⊥: góc giữa chúng bằng 90°
• Đường thẳng ⊥ mặt phẳng: ⊥ với 2 đường thẳng cắt nhau trong mp`,
    questions: [
      { text: "Có bao nhiêu cách xác định một mặt phẳng?", options: ["4", "2", "3", "5"], correct: 0 },
      { text: "Hai đường thẳng không có điểm chung và không song song thì:", options: ["Chéo nhau", "Cắt nhau", "Trùng nhau", "Song song"], correct: 0 },
      { text: "Đường thẳng song song với mặt phẳng khi:", options: ["Không cắt mặt phẳng", "Cắt mặt phẳng", "Nằm trong mặt phẳng", "Vuông góc với mặt phẳng"], correct: 0 },
      { text: "Hai mặt phẳng song song khi:", options: ["Chúng không có điểm chung", "Có 1 điểm chung", "Có vô số điểm chung", "Cắt nhau"], correct: 0 },
      { text: "Đường thẳng vuông góc với mặt phẳng khi:", options: ["Vuông góc với 2 đường thẳng cắt nhau trong mp", "Vuông góc với 1 đường thẳng trong mp", "Song song với mp", "Cắt mp"], correct: 0 },
      { text: "Hai đường thẳng vuông góc trong không gian khi:", options: ["Góc giữa chúng bằng 90°", "Chúng cắt nhau", "Chúng chéo nhau", "Chúng song song"], correct: 0 },
      { text: "Hai mặt phẳng vuông góc khi:", options: ["Chứa 1 đường thẳng vuông góc với mp kia", "Cắt nhau", "Song song", "Có giao tuyến"], correct: 0 },
      { text: "Hai đường thẳng chéo nhau:", options: ["Không cùng nằm trong một mặt phẳng", "Song song", "Cắt nhau", "Trùng nhau"], correct: 0 },
      { text: "Định lý ba đường vuông góc liên quan đến:", options: ["Hình chiếu", "Song song", "Đồng phẳng", "Tỉ lệ"], correct: 0 },
      { text: "Thiết diện là:", options: ["Đa giác giới hạn bởi giao tuyến của mp với hình chóp", "Mặt cắt", "Đường thẳng", "Điểm"], correct: 0 }
    ]
  }
];

// Lưu dữ liệu vào localStorage
if (typeof localStorage !== 'undefined') {
  if (!localStorage.getItem('math11Topics')) {
    localStorage.setItem('math11Topics', JSON.stringify(math11Topics));
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { math11Topics };
}