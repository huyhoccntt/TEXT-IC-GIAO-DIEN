// data_toan12.js - Dữ liệu kiến thức và câu hỏi Toán 12

const math12Topics = [
  {
    id: 1,
    title: "Ứng dụng đạo hàm - Khảo sát hàm số",
    topic: "Đại số 12 - Ứng dụng đạo hàm",
    grade_level: 12,
    content: `📌 SỰ ĐỒNG BIẾN - NGHỊCH BIẾN:
• f'(x) > 0 trên K ⇒ hàm số đồng biến trên K
• f'(x) < 0 trên K ⇒ hàm số nghịch biến trên K

📌 CỰC TRỊ CỦA HÀM SỐ:
• Điều kiện cần: f'(x₀) = 0
• Điều kiện đủ: f'(x) đổi dấu khi qua x₀

📌 GIÁ TRỊ LỚN NHẤT - NHỎ NHẤT:
• Trên đoạn [a;b]: So sánh f(a), f(b), f(xᵢ) với xᵢ là nghiệm f'(x)=0

📌 ĐƯỜNG TIỆM CẬN:
• TCĐ: x = x₀ khi lim f(x) = ±∞ (x→x₀)
• TCN: y = y₀ khi lim f(x) = y₀ (x→±∞)`,
    questions: [
      { text: "Hàm số đồng biến trên K khi:", options: ["f'(x) > 0 với mọi x ∈ K", "f'(x) < 0 với mọi x ∈ K", "f'(x) = 0 với mọi x ∈ K", "f'(x) không xác định"], correct: 0 },
      { text: "Điều kiện cần để hàm số đạt cực trị tại x₀ là:", options: ["f'(x₀) = 0", "f'(x₀) > 0", "f'(x₀) < 0", "f(x₀) = 0"], correct: 0 },
      { text: "Đường thẳng x = x₀ là tiệm cận đứng của đồ thị khi:", options: ["lim f(x) = ±∞ khi x→x₀", "lim f(x) = 0 khi x→x₀", "lim f(x) = const khi x→x₀", "f(x₀) = 0"], correct: 0 },
      { text: "Hàm số bậc ba y = ax³ + bx² + cx + d đồng biến trên R khi:", options: ["a > 0 và Δ' ≤ 0", "a < 0 và Δ' ≤ 0", "a > 0 và Δ' > 0", "a < 0 và Δ' > 0"], correct: 0 },
      { text: "Hàm trùng phương y = ax⁴ + bx² + c có 3 cực trị khi:", options: ["ab < 0", "ab > 0", "a > 0", "b > 0"], correct: 0 },
      { text: "Công thức tính nhanh đạo hàm của hàm phân thức (ax+b)/(cx+d) là:", options: ["(ad - bc)/(cx+d)²", "(ac - bd)/(cx+d)²", "(ab - cd)/(cx+d)²", "(bc - ad)/(cx+d)²"], correct: 0 },
      { text: "Điểm cực trị của hàm số y = x³ - 3x + 1 là:", options: ["x = 1 và x = -1", "x = 0 và x = 1", "x = -1 và x = 0", "x = 2 và x = -2"], correct: 0 },
      { text: "Hàm số y = x³ - 3x² + 2 đồng biến trên khoảng:", options: ["(-∞;0) và (2;+∞)", "(0;2)", "(-∞;2)", "(2;+∞)"], correct: 0 },
      { text: "Giá trị lớn nhất của hàm số y = -x² + 4x + 1 trên [0;3] là:", options: ["5", "4", "1", "6"], correct: 0 },
      { text: "Hàm số y = (x+1)/(x-1) có tiệm cận đứng là:", options: ["x = 1", "x = -1", "y = 1", "y = -1"], correct: 0 }
    ]
  },
  {
    id: 2,
    title: "Lũy thừa - Mũ - Logarit",
    topic: "Đại số 12 - Mũ Logarit",
    grade_level: 12,
    content: `📌 LŨY THỪA:
• a^(-n) = 1/a^n (a ≠ 0)
• √[n]{a} = a^(1/n)
• a^α.a^β = a^(α+β)
• (a^α)^β = a^(αβ)

📌 LOGARIT:
• log_a b = α ⇔ a^α = b (a>0, a≠1, b>0)
• log_a(bc) = log_a b + log_a c
• log_a(b/c) = log_a b - log_a c
• log_a b^α = α.log_a b
• log_a b = log_c b / log_c a = 1/log_b a

📌 ĐẠO HÀM MŨ - LOGARIT:
• (a^x)' = a^x.ln a
• (e^x)' = e^x
• (log_a x)' = 1/(x.ln a)
• (ln x)' = 1/x`,
    questions: [
      { text: "log_a(bc) bằng:", options: ["log_a b + log_a c", "log_a b . log_a c", "log_a b - log_a c", "log_a b / log_a c"], correct: 0 },
      { text: "Đạo hàm của e^x là:", options: ["e^x", "x.e^(x-1)", "ln x", "1/x"], correct: 0 },
      { text: "Đạo hàm của ln x là:", options: ["1/x", "x", "e^x", "1"], correct: 0 },
      { text: "log_a(b^α) bằng:", options: ["α.log_a b", "(log_a b)^α", "α + log_a b", "α - log_a b"], correct: 0 },
      { text: "Giá trị của log₂8 là:", options: ["3", "2", "4", "1"], correct: 0 },
      { text: "Phương trình 2^x = 8 có nghiệm là:", options: ["x = 3", "x = 2", "x = 4", "x = 1"], correct: 0 },
      { text: "Điều kiện xác định của log₃(x-2) là:", options: ["x > 2", "x ≥ 2", "x < 2", "x ≤ 2"], correct: 0 },
      { text: "log_a 1 bằng:", options: ["0", "1", "a", "Không xác định"], correct: 0 },
      { text: "log_a a bằng:", options: ["1", "0", "a", "Không xác định"], correct: 0 },
      { text: "Công thức đổi cơ số log_a b bằng:", options: ["log_c b / log_c a", "log_c a / log_c b", "log_c (ab)", "log_c (a+b)"], correct: 0 }
    ]
  },
  {
    id: 3,
    title: "Nguyên hàm - Tích phân",
    topic: "Đại số 12 - Nguyên hàm",
    grade_level: 12,
    content: `📌 NGUYÊN HÀM CƠ BẢN:
• ∫ x^α dx = x^(α+1)/(α+1) + C (α ≠ -1)
• ∫ 1/x dx = ln|x| + C
• ∫ e^x dx = e^x + C
• ∫ a^x dx = a^x/ln a + C
• ∫ sin x dx = -cos x + C
• ∫ cos x dx = sin x + C

📌 PHƯƠNG PHÁP TÍNH NGUYÊN HÀM:
• Phương pháp đổi biến số
• Phương pháp nguyên hàm từng phần: ∫ u dv = uv - ∫ v du

📌 TÍCH PHÂN XÁC ĐỊNH:
∫_a^b f(x)dx = F(b) - F(a) (Công thức Newton-Leibniz)

📌 ỨNG DỤNG TÍCH PHÂN:
• Diện tích hình phẳng: S = ∫_a^b |f(x) - g(x)|dx`,
    questions: [
      { text: "∫ x² dx bằng:", options: ["x³/3 + C", "2x + C", "x³ + C", "x²/2 + C"], correct: 0 },
      { text: "∫ sin x dx bằng:", options: ["-cos x + C", "cos x + C", "sin x + C", "-sin x + C"], correct: 0 },
      { text: "∫ 1/x dx bằng:", options: ["ln|x| + C", "x + C", "1 + C", "0 + C"], correct: 0 },
      { text: "∫ e^x dx bằng:", options: ["e^x + C", "x.e^(x-1) + C", "ln x + C", "1 + C"], correct: 0 },
      { text: "Công thức tích phân từng phần là:", options: ["∫ u dv = uv - ∫ v du", "∫ u dv = uv + ∫ v du", "∫ u dv = ∫ uv - ∫ v du", "∫ u dv = ∫ uv + ∫ v du"], correct: 0 },
      { text: "∫_1^2 x dx bằng:", options: ["3/2", "1/2", "1", "2"], correct: 0 },
      { text: "∫ cos x dx bằng:", options: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"], correct: 0 },
      { text: "Diện tích hình phẳng giới hạn bởi y = x², y = 0, x = 0, x = 1 là:", options: ["1/3", "1/2", "1", "2/3"], correct: 0 },
      { text: "∫ (3x² + 2x + 1) dx bằng:", options: ["x³ + x² + x + C", "x³ + x² + C", "3x³ + 2x² + x + C", "x³ + 2x² + x + C"], correct: 0 },
      { text: "∫_0^π sin x dx bằng:", options: ["2", "1", "0", "π"], correct: 0 }
    ]
  },
  {
    id: 4,
    title: "Số phức",
    topic: "Đại số 12 - Số phức",
    grade_level: 12,
    content: `📌 ĐỊNH NGHĨA SỐ PHỨC:
z = a + bi, (a,b ∈ R, i² = -1)
• a: phần thực, b: phần ảo

📌 SỐ PHỨC LIÊN HỢP:
z̅ = a - bi

📌 MÔĐUN SỐ PHỨC:
|z| = √(a² + b²)

📌 CÁC PHÉP TOÁN:
• Cộng: (a+bi) + (c+di) = (a+c) + (b+d)i
• Nhân: (a+bi)(c+di) = (ac-bd) + (ad+bc)i

📌 PHƯƠNG TRÌNH BẬC HAI VỚI HỆ SỐ THỰC:
• Nếu Δ < 0: x = (-b ± i√|Δ|)/(2a)`,
    questions: [
      { text: "Số phức z = 3 - 2i có phần thực và phần ảo là:", options: ["a=3, b=-2", "a=3, b=2", "a=-3, b=2", "a=-3, b=-2"], correct: 0 },
      { text: "Số phức liên hợp của z = 4 + 5i là:", options: ["4 - 5i", "-4 + 5i", "-4 - 5i", "5 + 4i"], correct: 0 },
      { text: "Môđun của số phức z = 3 + 4i là:", options: ["5", "7", "1", "25"], correct: 0 },
      { text: "i² bằng:", options: ["-1", "1", "i", "-i"], correct: 0 },
      { text: "(2 + 3i) + (4 - i) bằng:", options: ["6 + 2i", "6 + 4i", "2 + 2i", "8 + 2i"], correct: 0 },
      { text: "(2 + 3i) - (4 - i) bằng:", options: ["-2 + 4i", "-2 + 2i", "2 + 4i", "6 + 2i"], correct: 0 },
      { text: "(1 + i)(1 - i) bằng:", options: ["2", "0", "1 - i", "1 + i"], correct: 0 },
      { text: "Phương trình x² + 1 = 0 có nghiệm trong tập số phức là:", options: ["x = ±i", "x = ±1", "x = 0", "x = ±√(-1)"], correct: 0 },
      { text: "Tập hợp điểm biểu diễn số phức z thỏa |z| = 2 là:", options: ["Đường tròn tâm O bán kính 2", "Đường thẳng", "Đường tròn tâm O bán kính 4", "Hình tròn tâm O bán kính 2"], correct: 0 },
      { text: "z̅.z bằng:", options: ["|z|²", "|z|", "z²", "2|z|"], correct: 0 }
    ]
  },
  {
    id: 5,
    title: "Thể tích khối đa diện",
    topic: "Hình học 12 - Khối đa diện",
    grade_level: 12,
    content: `📌 CÔNG THỨC THỂ TÍCH:
• Khối chóp: V = 1/3 × S_đáy × h
• Khối lăng trụ: V = S_đáy × h
• Khối hộp chữ nhật: V = a × b × c
• Khối lập phương: V = a³

📌 TỈ SỐ THỂ TÍCH (khối chóp tam giác):
V_S.A'B'C' / V_S.ABC = SA'/SA × SB'/SB × SC'/SC

📌 CÔNG THỨC TÍNH NHANH:
• Tứ diện đều cạnh a: V = a³√2/12`,
    questions: [
      { text: "Thể tích khối chóp có diện tích đáy S và chiều cao h là:", options: ["V = 1/3 × S × h", "V = S × h", "V = 1/2 × S × h", "V = 2/3 × S × h"], correct: 0 },
      { text: "Thể tích khối lăng trụ có diện tích đáy S và chiều cao h là:", options: ["V = S × h", "V = 1/3 × S × h", "V = 1/2 × S × h", "V = 2/3 × S × h"], correct: 0 },
      { text: "Thể tích khối lập phương cạnh a là:", options: ["a³", "a²", "3a", "6a²"], correct: 0 },
      { text: "Thể tích khối hộp chữ nhật có kích thước a,b,c là:", options: ["a × b × c", "a + b + c", "2(ab+bc+ca)", "a² + b² + c²"], correct: 0 },
      { text: "Tứ diện đều cạnh a có thể tích là:", options: ["a³√2/12", "a³√3/12", "a³/12", "a³√2/6"], correct: 0 },
      { text: "Thể tích khối chóp có đáy là hình vuông cạnh a, chiều cao h là:", options: ["a²h/3", "a²h", "4a²h/3", "2a²h/3"], correct: 0 },
      { text: "Tỉ số thể tích của hai khối chóp tam giác có cùng đỉnh là:", options: ["Tích tỉ lệ các cạnh bên tương ứng", "Tổng tỉ lệ các cạnh bên", "Hiệu tỉ lệ các cạnh bên", "Thương tỉ lệ các cạnh bên"], correct: 0 },
      { text: "Một hình chóp có thể tích 30, đáy diện tích 15 thì chiều cao bằng:", options: ["6", "2", "3", "4"], correct: 0 },
      { text: "Khối lăng trụ có đáy là tam giác đều cạnh a, chiều cao h có thể tích:", options: ["a²h√3/4", "a²h/4", "a²h√3/2", "a²h/2"], correct: 0 },
      { text: "Công thức tính thể tích khối chóp cụt là:", options: ["V = h/3(B + B' + √(BB'))", "V = h(B + B')", "V = h/2(B + B')", "V = h(B - B')"], correct: 0 }
    ]
  },
  {
    id: 6,
    title: "Mặt nón - Mặt trụ - Mặt cầu",
    topic: "Hình học 12 - Mặt tròn xoay",
    grade_level: 12,
    content: `📌 MẶT NÓN - KHỐI NÓN:
• Diện tích xung quanh: S_xq = πrl (r: bán kính đáy, l: đường sinh)
• Thể tích: V = 1/3 × πr² × h

📌 MẶT TRỤ - KHỐI TRỤ:
• Diện tích xung quanh: S_xq = 2πrh
• Thể tích: V = πr² × h

📌 MẶT CẦU - KHỐI CẦU:
• Diện tích mặt cầu: S = 4πR²
• Thể tích khối cầu: V = 4/3 × πR³`,
    questions: [
      { text: "Diện tích xung quanh hình nón có bán kính đáy r và đường sinh l là:", options: ["πrl", "2πrl", "πr²l", "πr²"], correct: 0 },
      { text: "Thể tích khối nón có bán kính đáy r và chiều cao h là:", options: ["1/3 × πr²h", "πr²h", "2πr²h", "1/2 × πr²h"], correct: 0 },
      { text: "Diện tích xung quanh hình trụ có bán kính đáy r và chiều cao h là:", options: ["2πrh", "πrh", "πr²h", "2πr²h"], correct: 0 },
      { text: "Thể tích khối trụ có bán kính đáy r và chiều cao h là:", options: ["πr²h", "1/3 × πr²h", "2πr²h", "πrh"], correct: 0 },
      { text: "Diện tích mặt cầu bán kính R là:", options: ["4πR²", "4/3 × πR³", "πR²", "2πR²"], correct: 0 },
      { text: "Thể tích khối cầu bán kính R là:", options: ["4/3 × πR³", "4πR²", "πR³", "4πR³/3"], correct: 0 },
      { text: "Hình nón có bán kính đáy 3, đường sinh 5 thì diện tích xung quanh là:", options: ["15π", "9π", "12π", "20π"], correct: 0 },
      { text: "Hình trụ có bán kính đáy 2, chiều cao 5 thì thể tích là:", options: ["20π", "10π", "40π", "5π"], correct: 0 },
      { text: "Mặt cầu bán kính 3 có diện tích là:", options: ["36π", "9π", "18π", "27π"], correct: 0 },
      { text: "Khối cầu bán kính 2 có thể tích là:", options: ["32π/3", "16π/3", "8π/3", "4π/3"], correct: 0 }
    ]
  },
  {
    id: 7,
    title: "Phương pháp tọa độ trong không gian Oxyz",
    topic: "Hình học 12 - Oxyz",
    grade_level: 12,
    content: `📌 TỌA ĐỘ ĐIỂM - VECTƠ:
• u = (x;y;z) ⇔ u = xi + yj + zk
• |u| = √(x² + y² + z²)
• u.v = x₁x₂ + y₁y₂ + z₁z₂

📌 MẶT PHẲNG:
• Phương trình tổng quát: Ax + By + Cz + D = 0
• Khoảng cách: d(M,(P)) = |Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)

📌 ĐƯỜNG THẲNG:
• Phương trình tham số: x = x₀ + at, y = y₀ + bt, z = z₀ + ct

📌 MẶT CẦU:
• (x-a)² + (y-b)² + (z-c)² = R²`,
    questions: [
      { text: "Tích vô hướng của hai vectơ u = (1;2;3) và v = (4;5;6) là:", options: ["32", "22", "42", "12"], correct: 0 },
      { text: "Độ dài vectơ u = (3;4;0) là:", options: ["5", "7", "1", "25"], correct: 0 },
      { text: "Phương trình mặt phẳng (Oxy) là:", options: ["z = 0", "x = 0", "y = 0", "x + y = 0"], correct: 0 },
      { text: "Khoảng cách từ M(1;2;3) đến mặt phẳng (P): x + 2y + 2z - 10 = 0 là:", options: ["3", "2", "1", "4"], correct: 0 },
      { text: "Vectơ pháp tuyến của mặt phẳng 2x - 3y + 4z - 5 = 0 là:", options: ["(2;-3;4)", "(2;3;4)", "(2;-3;-4)", "(-2;3;4)"], correct: 0 },
      { text: "Mặt cầu (x-1)² + (y+2)² + (z-3)² = 25 có tâm là:", options: ["I(1;-2;3)", "I(-1;2;-3)", "I(1;2;3)", "I(-1;-2;-3)"], correct: 0 },
      { text: "Mặt cầu trên có bán kính là:", options: ["5", "25", "10", "15"], correct: 0 },
      { text: "Phương trình tham số của đường thẳng qua M(1;2;3) có VTCP u=(2;1;-1) là:", options: ["x=1+2t, y=2+t, z=3-t", "x=2+t, y=1+2t, z=-1+3t", "x=1+2t, y=2+t, z=3+t", "x=1+t, y=2+2t, z=3-t"], correct: 0 },
      { text: "Tích có hướng của u=(1;0;0) và v=(0;1;0) là:", options: ["(0;0;1)", "(1;1;0)", "(0;0;-1)", "(1;0;1)"], correct: 0 },
      { text: "Thể tích tứ diện ABCD với A(0;0;0), B(1;0;0), C(0;1;0), D(0;0;1) là:", options: ["1/6", "1/3", "1/2", "1"], correct: 0 }
    ]
  }
];

// Lưu dữ liệu vào localStorage
if (typeof localStorage !== 'undefined') {
  if (!localStorage.getItem('math12Topics')) {
    localStorage.setItem('math12Topics', JSON.stringify(math12Topics));
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { math12Topics };
}