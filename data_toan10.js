// data_toan10.js - Dữ liệu kiến thức và câu hỏi Toán 10

const mathTopics = [
  {
    id: 1,
    title: "Hằng đẳng thức đáng nhớ",
    topic: "Đại số - Biểu thức",
    grade_level: 10,
    content: `• (A + B)² = A² + 2AB + B²
• (A - B)² = A² - 2AB + B²
• A² - B² = (A - B)(A + B)
• (A + B)³ = A³ + 3A²B + 3AB² + B³
• (A - B)³ = A³ - 3A²B + 3AB² - B³
• A³ + B³ = (A + B)(A² - AB + B²)
• A³ - B³ = (A - B)(A² + AB + B²)`,
    questions: [
      { text: "Khai triển (x + 2)² bằng:", options: ["x² + 4x + 4", "x² + 2x + 4", "x² + 4x + 2", "x² + 2x + 2"], correct: 0 },
      { text: "Viết 9x² - 16 dưới dạng tích:", options: ["(3x - 4)(3x + 4)", "(3x - 4)²", "(3x + 4)²", "(9x - 16)(9x + 16)"], correct: 0 },
      { text: "Khai triển (x - 3)³ bằng:", options: ["x³ - 9x² + 27x - 27", "x³ + 9x² + 27x + 27", "x³ - 6x² + 12x - 8", "x³ - 3x² + 9x - 27"], correct: 0 },
      { text: "Rút gọn (a + b)² - (a - b)²:", options: ["4ab", "2ab", "2a² + 2b²", "4a²"], correct: 0 },
      { text: "Phân tích x³ + 8 thành nhân tử:", options: ["(x + 2)(x² - 2x + 4)", "(x + 2)³", "(x - 2)(x² + 2x + 4)", "(x + 2)(x² + 2x + 4)"], correct: 0 },
      { text: "Giá trị của (x + 1)(x² - x + 1) bằng:", options: ["x³ + 1", "x³ - 1", "(x + 1)³", "x³ + 3x² + 3x + 1"], correct: 0 },
      { text: "Tìm x biết (2x - 1)² = 9:", options: ["x = 2 hoặc x = -1", "x = 2 hoặc x = 1", "x = -2 hoặc x = 1", "x = -2 hoặc x = -1"], correct: 0 },
      { text: "Rút gọn (x + y)³ - (x - y)³:", options: ["2y(3x² + y²)", "2x(3y² + x²)", "6x²y + 2y³", "6xy² + 2x³"], correct: 0 },
      { text: "Biểu thức x² - 4x + 4 được viết thành:", options: ["(x - 2)²", "(x + 2)²", "(x - 4)²", "(x + 4)²"], correct: 0 },
      { text: "Giá trị của 99² bằng (dùng hằng đẳng thức):", options: ["9801", "9800", "9901", "9900"], correct: 0 }
    ]
  },
  {
    id: 2,
    title: "Chia đa thức và Sơ đồ Hoocne",
    topic: "Đại số - Đa thức",
    grade_level: 10,
    content: `Sơ đồ Hoocne dùng để chia đa thức f(x) cho nhị thức (x - a).

CÁCH THỰC HIỆN:
1. Viết các hệ số của đa thức f(x) theo thứ tự bậc giảm dần
2. Đưa số a vào góc trái sơ đồ
3. Nhân ngang, cộng chéo

VÍ DỤ: Chia x³ - 4x² + 7x - 6 cho (x - 2)
Hệ số: 1, -4, 7, -6
Đưa 2 vào sơ đồ
Kết quả: 1, -2, 3, 0
Vậy f(x) = (x - 2)(x² - 2x + 3)`,
    questions: [
      { text: "Sơ đồ Hoocne dùng để chia đa thức cho nhị thức dạng nào?", options: ["x - a", "x + a", "ax + b", "x² + 1"], correct: 0 },
      { text: "Khi chia f(x) cho (x - a) bằng Hoocne, số ở góc trái sơ đồ là:", options: ["a", "-a", "1", "f(a)"], correct: 0 },
      { text: "Chia x³ - 6x² + 11x - 6 cho (x - 1) bằng Hoocne được thương là:", options: ["x² - 5x + 6", "x² + 5x - 6", "x² - 6x + 11", "x² - 5x - 6"], correct: 0 },
      { text: "Kết quả phép chia x³ - 2x² - 5x + 6 cho (x - 3) có dư là:", options: ["0", "1", "-1", "2"], correct: 0 },
      { text: "Đa thức nào chia hết cho (x - 2)?", options: ["x³ - 3x² + 4", "x³ + 2x² - 4", "x³ - 4x² + 5x - 2", "x³ - 5x² + 8x - 4"], correct: 2 },
      { text: "Số a để f(x) = x³ + ax² + 2x - 3 chia hết cho (x - 1) là:", options: ["0", "1", "2", "3"], correct: 0 },
      { text: "Phép chia (x⁴ - 1) cho (x - 1) bằng Hoocne có kết quả:", options: ["x³ + x² + x + 1", "x³ - x² + x - 1", "x³ + 1", "x³ - 1"], correct: 0 },
      { text: "Đa thức f(x) = x³ - 7x + 6 chia cho (x - 2) có số dư là:", options: ["0", "4", "-4", "8"], correct: 0 },
      { text: "Để tìm giá trị f(a) nhanh, có thể dùng:", options: ["Định lý Bezout", "Định lý Vi-ét", "Định lý Pythagoras", "Định lý Thales"], correct: 0 },
      { text: "Chia x³ + 3x² - 4x + 2 cho (x + 2) được thương là:", options: ["x² + x - 6", "x² + x + 6", "x² - x + 6", "x² - x - 6"], correct: 0 }
    ]
  },
  {
    id: 3,
    title: "Bất đẳng thức Cauchy, Bunhiacopxki",
    topic: "Đại số - Bất đẳng thức",
    grade_level: 10,
    content: `📌 BẤT ĐẲNG THỨC CAUCHY (AM-GM):
Với a, b ≥ 0: (a + b)/2 ≥ √(ab)
Dấu "=" xảy ra khi a = b

📌 BẤT ĐẲNG THỨC BUNHIACOPXKI:
(ax + by)² ≤ (a² + b²)(x² + y²)
Dấu "=" xảy ra khi a/x = b/y

📌 BẤT ĐẲNG THỨC MINCOPKI:
√(a² + b²) + √(c² + d²) ≥ √[(a + c)² + (b + d)²]`,
    questions: [
      { text: "Bất đẳng thức Cauchy còn được gọi là:", options: ["AM-GM", "Bunhiacopxki", "Mincopxki", "Chebyshev"], correct: 0 },
      { text: "Với a, b ≥ 0, bất đẳng thức Cauchy phát biểu:", options: ["(a+b)/2 ≥ √(ab)", "a+b ≥ 2ab", "a²+b² ≥ 2ab", "√(ab) ≥ (a+b)/2"], correct: 0 },
      { text: "Dấu '=' của bất đẳng thức Cauchy xảy ra khi:", options: ["a = b", "a = 0", "b = 0", "a = -b"], correct: 0 },
      { text: "Với a, b > 0, giá trị nhỏ nhất của a + 1/a là:", options: ["2", "1", "0", "1/2"], correct: 0 },
      { text: "Tìm giá trị nhỏ nhất của x² + 1/x² với x > 0:", options: ["2", "1", "4", "0"], correct: 0 },
      { text: "Cho a, b > 0, biểu thức (a + b)(1/a + 1/b) có giá trị nhỏ nhất là:", options: ["4", "2", "1", "8"], correct: 0 },
      { text: "Bất đẳng thức Mincopxki liên quan đến:", options: ["Độ dài cạnh tam giác", "Diện tích", "Thể tích", "Góc"], correct: 0 },
      { text: "Với a, b > 0, bất đẳng thức a/b + b/a ≥ 2 xuất phát từ:", options: ["Cauchy", "Bunhiacopxki", "Mincopxki", "Bernoulli"], correct: 0 },
      { text: "Cho x, y > 0 thỏa x + y = 2, giá trị lớn nhất của xy là:", options: ["1", "2", "4", "0.5"], correct: 0 },
      { text: "Bất đẳng thức Bunhiacopxki cho (x + 2y)² ≤ (1² + 2²)(x² + y²) là dạng:", options: ["Đúng", "Sai", "Chỉ đúng khi x=y", "Chỉ đúng khi x=0"], correct: 0 }
    ]
  },
  {
    id: 4,
    title: "Phương trình bậc hai và Định lý Vi-ét",
    topic: "Đại số - Phương trình",
    grade_level: 10,
    content: `📐 CÔNG THỨC NGHIỆM:
ax² + bx + c = 0 (a ≠ 0)
Δ = b² - 4ac
x₁ = (-b + √Δ)/(2a); x₂ = (-b - √Δ)/(2a)

📌 ĐỊNH LÝ VI-ÉT:
S = x₁ + x₂ = -b/a
P = x₁.x₂ = c/a

⚡ ỨNG DỤNG:
• Tìm hai số khi biết tổng và tích
• Phân tích tam thức thành nhân tử
• Điều kiện nghiệm: trái dấu ⇔ ac < 0; cùng dấu ⇔ P > 0 và Δ ≥ 0`,
    questions: [
      { text: "Phương trình x² - 5x + 6 = 0 có nghiệm là:", options: ["x = 2, x = 3", "x = -2, x = -3", "x = 1, x = 6", "x = -1, x = -6"], correct: 0 },
      { text: "Theo định lý Vi-ét, tổng hai nghiệm của phương trình 2x² - 6x + 4 = 0 là:", options: ["3", "-3", "2", "-2"], correct: 0 },
      { text: "Tích hai nghiệm của phương trình x² - 2x - 8 = 0 là:", options: ["-8", "8", "-2", "2"], correct: 0 },
      { text: "Phương trình nào có hai nghiệm trái dấu?", options: ["x² - 5x + 6 = 0", "x² - 3x - 4 = 0", "x² + 4x + 4 = 0", "x² + 2x + 5 = 0"], correct: 1 },
      { text: "Biệt thức Δ của phương trình 3x² - 4x + 1 = 0 là:", options: ["4", "16", "-4", "0"], correct: 0 },
      { text: "Phương trình x² - 2x + m = 0 có nghiệm kép khi:", options: ["m = 1", "m = -1", "m = 2", "m = -2"], correct: 0 },
      { text: "Cho phương trình x² - 3x + 2 = 0, giá trị của x₁² + x₂² là:", options: ["5", "9", "4", "13"], correct: 0 },
      { text: "Hai số có tổng bằng 5 và tích bằng 6 là nghiệm của phương trình:", options: ["x² - 5x + 6 = 0", "x² + 5x + 6 = 0", "x² - 5x - 6 = 0", "x² + 5x - 6 = 0"], correct: 0 },
      { text: "Phương trình vô nghiệm khi:", options: ["Δ < 0", "Δ = 0", "Δ > 0", "a = 0"], correct: 0 },
      { text: "Giá trị 1/x₁ + 1/x₂ của phương trình x² - 3x + 2 = 0 là:", options: ["3/2", "2/3", "3", "2"], correct: 0 }
    ]
  },
  {
    id: 5,
    title: "Hệ thức lượng trong tam giác",
    topic: "Hình học phẳng",
    grade_level: 10,
    content: `📐 ĐỊNH LÝ COS:
a² = b² + c² - 2bc.cosA

📏 ĐỊNH LÝ SIN:
a/sinA = b/sinB = c/sinC = 2R

📐 DIỆN TÍCH TAM GIÁC:
S = (1/2)bc.sinA = abc/(4R) = √[p(p-a)(p-b)(p-c)] (Heron)`,
    questions: [
      { text: "Định lý cos trong tam giác ABC phát biểu:", options: ["a² = b² + c² - 2bc.cosA", "a² = b² + c² + 2bc.cosA", "a² = b² + c² - 2bc.sinA", "a² = b² + c² + 2bc.sinA"], correct: 0 },
      { text: "Cho tam giác có a=3, b=4, C=90°. Cạnh c bằng:", options: ["5", "7", "1", "25"], correct: 0 },
      { text: "Công thức Heron dùng để tính:", options: ["Diện tích tam giác", "Chu vi tam giác", "Bán kính đường tròn ngoại tiếp", "Độ dài đường cao"], correct: 0 },
      { text: "Theo định lý sin, 2R bằng:", options: ["a/sinA", "a.sinA", "a/cosA", "a.tanA"], correct: 0 },
      { text: "Diện tích tam giác có hai cạnh b=5, c=6 và góc A=30° là:", options: ["7.5", "15", "30", "3.75"], correct: 0 },
      { text: "Bán kính đường tròn nội tiếp tam giác được tính bằng:", options: ["S/p", "2S/p", "S/(2p)", "p/S"], correct: 0 },
      { text: "Độ dài đường trung tuyến từ đỉnh A tính theo công thức:", options: ["m_a² = (b² + c²)/2 - a²/4", "m_a² = (b² + c²)/2 + a²/4", "m_a² = b² + c² - a²/2", "m_a² = (b² + c² - a²)/2"], correct: 0 },
      { text: "Cho tam giác có a=7, b=8, c=9. Diện tích (theo Heron) gần bằng:", options: ["26.83", "24", "28", "30"], correct: 0 },
      { text: "Công thức tính bán kính đường tròn ngoại tiếp:", options: ["R = abc/(4S)", "R = S/p", "R = 4S/(abc)", "R = p/S"], correct: 0 },
      { text: "Trong tam giác đều cạnh a, diện tích bằng:", options: ["a²√3/4", "a²√3/2", "a²/4", "a²√3"], correct: 0 }
    ]
  },
  {
    id: 6,
    title: "Hàm số bậc hai",
    topic: "Đại số - Hàm số",
    grade_level: 10,
    content: `y = ax² + bx + c (a ≠ 0)

• Đỉnh S(-b/(2a), -Δ/(4a))
• Trục đối xứng x = -b/(2a)
• a > 0: bề lõm hướng lên
• a < 0: bề lõm hướng xuống
• Δ = b² - 4ac: Δ > 0 cắt Ox tại 2 điểm; Δ = 0 tiếp xúc; Δ < 0 không cắt Ox`,
    questions: [
      { text: "Hàm số bậc hai có dạng:", options: ["y = ax² + bx + c (a≠0)", "y = ax + b", "y = ax³ + bx² + cx + d", "y = a/x"], correct: 0 },
      { text: "Tọa độ đỉnh của parabol y = x² - 4x + 3 là:", options: ["(2, -1)", "(-2, -1)", "(2, 1)", "(-2, 1)"], correct: 0 },
      { text: "Trục đối xứng của parabol y = 2x² - 8x + 5 là:", options: ["x = 2", "x = -2", "x = 4", "x = -4"], correct: 0 },
      { text: "Parabol y = -x² + 4x - 3 có bề lõm hướng:", options: ["Xuống dưới", "Lên trên", "Sang trái", "Sang phải"], correct: 0 },
      { text: "Giá trị lớn nhất của hàm số y = -x² + 2x + 3 là:", options: ["4", "3", "2", "1"], correct: 0 },
      { text: "Parabol y = x² - 2x + 1 cắt trục Ox tại:", options: ["1 điểm", "2 điểm", "0 điểm", "Vô số điểm"], correct: 0 },
      { text: "Hàm số nào đồng biến trên khoảng (1, +∞)?", options: ["y = x² - 2x + 1", "y = -x² + 2x", "y = -x² + 4x - 3", "y = x² + 2x + 1"], correct: 0 },
      { text: "Giá trị nhỏ nhất của hàm số y = x² - 4x + 5 là:", options: ["1", "2", "3", "4"], correct: 0 },
      { text: "Parabol y = 2x² - 8x + 6 có đỉnh tại:", options: ["(2, -2)", "(-2, 2)", "(2, 2)", "(-2, -2)"], correct: 0 },
      { text: "Điểm nào thuộc parabol y = x² - 3x + 2?", options: ["(1, 0)", "(0, 1)", "(2, 1)", "(3, 2)"], correct: 0 }
    ]
  }
];

// Lưu dữ liệu vào localStorage
if (typeof localStorage !== 'undefined') {
  if (!localStorage.getItem('mathTopics')) {
    localStorage.setItem('mathTopics', JSON.stringify(mathTopics));
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mathTopics };
}