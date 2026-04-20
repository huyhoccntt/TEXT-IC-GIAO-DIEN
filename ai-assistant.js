// ai-assistant.js - Trợ lý AI thông minh cho học tập

// AI Assistant Class
class AIAssistant {
  constructor() {
    this.userStats = null;
    this.mistakeTracker = {}; // Lưu lỗi sai theo từng chủ đề
    this.loadData();
  }

  loadData() {
    // Tải dữ liệu thống kê từ localStorage
    const savedMistakes = localStorage.getItem('ai_mistake_tracker');
    if (savedMistakes) {
      this.mistakeTracker = JSON.parse(savedMistakes);
    }
  }

  saveData() {
    localStorage.setItem('ai_mistake_tracker', JSON.stringify(this.mistakeTracker));
  }

  // Phân tích câu trả lời sai
  analyzeMistake(question, userAnswer, correctAnswer, topicTitle) {
    const mistake = {
      question: question,
      userAnswer: userAnswer,
      correctAnswer: correctAnswer,
      topic: topicTitle,
      timestamp: new Date().toISOString()
    };

    // Lưu lỗi sai theo chủ đề
    if (!this.mistakeTracker[topicTitle]) {
      this.mistakeTracker[topicTitle] = [];
    }
    this.mistakeTracker[topicTitle].push(mistake);
    this.saveData();

    return this.generateExplanation(question, userAnswer, correctAnswer, topicTitle);
  }

  // Tạo giải thích cho câu sai
  generateExplanation(question, userAnswer, correctAnswer, topicTitle) {
    const explanations = {
      "Hằng đẳng thức đáng nhớ": {
        theory: "📚 LÝ THUYẾT HẰNG ĐẲNG THỨC:\n• (A + B)² = A² + 2AB + B²\n• (A - B)² = A² - 2AB + B²\n• A² - B² = (A - B)(A + B)\n• (A + B)³ = A³ + 3A²B + 3AB² + B³\n• (A - B)³ = A³ - 3A²B + 3AB² - B³",
        tip: "💡 MẸO: Hãy học thuộc 7 hằng đẳng thức đáng nhớ và luyện tập khai triển thường xuyên!"
      },
      "Phương trình bậc hai và Định lý Vi-ét": {
        theory: "📚 LÝ THUYẾT PHƯƠNG TRÌNH BẬC HAI:\n• Công thức nghiệm: x = [-b ± √(b²-4ac)]/(2a)\n• Định lý Vi-ét: S = x₁ + x₂ = -b/a, P = x₁.x₂ = c/a\n• Δ = b² - 4ac: Δ > 0 (2 nghiệm), Δ = 0 (nghiệm kép), Δ < 0 (vô nghiệm)",
        tip: "💡 MẸO: Nhớ 'TRONG TRÁI - NGOÀI CÙNG' khi xét dấu tam thức bậc hai!"
      },
      "Bất đẳng thức Cauchy, Bunhiacopxki": {
        theory: "📚 LÝ THUYẾT BẤT ĐẲNG THỨC:\n• Cauchy (AM-GM): (a+b)/2 ≥ √(ab) với a,b ≥ 0\n• Bunhiacopxki: (ax+by)² ≤ (a²+b²)(x²+y²)\n• Dấu '=' xảy ra khi a=b (Cauchy) hoặc a/x = b/y (Bunhiacopxki)",
        tip: "💡 MẸO: BĐT Cauchy thường dùng để tìm GTNN, BĐT Bunhiacopxki dùng để đánh giá biểu thức chứa căn!"
      },
      "Hàm số lượng giác cơ bản": {
        theory: "📚 LÝ THUYẾT HÀM SỐ LƯỢNG GIÁC:\n• sin x: TXĐ R, TGT [-1;1], chu kỳ 2π, hàm lẻ\n• cos x: TXĐ R, TGT [-1;1], chu kỳ 2π, hàm chẵn\n• tan x: TXĐ R\\{π/2+kπ}, chu kỳ π, hàm lẻ\n• cot x: TXĐ R\\{kπ}, chu kỳ π, hàm lẻ",
        tip: "💡 MẸO: sin chẵn cos lẻ? Nhớ 'sin lẻ, cos chẵn, tan/cot lẻ'!"
      },
      "Giới hạn dãy số": {
        theory: "📚 LÝ THUYẾT GIỚI HẠN:\n• lim(1/n) = 0 khi n→∞\n• lim qⁿ = 0 nếu |q| < 1\n• lim(u_n ± v_n) = lim u_n ± lim v_n\n• Dạng vô định: 0/0, ∞/∞, ∞-∞",
        tip: "💡 MẸO: Khi gặp ∞/∞, chia tử và mẫu cho lũy thừa bậc cao nhất!"
      }
    };

    const defaultTheory = {
      theory: "📚 LÝ THUYẾT CHUNG:\nHãy xem lại kiến thức cơ bản của chủ đề này trong phần tóm tắt lý thuyết phía trên.",
      tip: "💡 MẸO: Đọc kỹ câu hỏi và các đáp án, loại trừ phương án sai trước khi chọn!"
    };

    const explanation = explanations[topicTitle] || defaultTheory;
    
    return {
      topic: topicTitle,
      userChoice: userAnswer,
      correctChoice: correctAnswer,
      theory: explanation.theory,
      tip: explanation.tip,
      suggestion: `🔍 PHÂN TÍCH: Câu trả lời của bạn là "${userAnswer}" nhưng đáp án đúng là "${correctAnswer}". ${explanation.tip}`
    };
  }

  // Lấy thống kê lỗi sai
  getMistakeStatistics() {
    const stats = {};
    let totalMistakes = 0;
    
    for (const [topic, mistakes] of Object.entries(this.mistakeTracker)) {
      stats[topic] = {
        count: mistakes.length,
        lastMistake: mistakes[mistakes.length - 1]?.timestamp || null
      };
      totalMistakes += mistakes.length;
    }
    
    return {
      totalMistakes: totalMistakes,
      byTopic: stats,
      weakTopics: Object.entries(stats).filter(([_, data]) => data.count > 3).map(([topic]) => topic)
    };
  }

  // Gợi ý học tập dựa trên lỗi sai
  getStudySuggestion() {
    const stats = this.getMistakeStatistics();
    const weakTopics = stats.weakTopics;
    
    if (weakTopics.length > 0) {
      return {
        type: 'warning',
        message: `⚠️ Bạn đã sai nhiều ở các chủ đề: ${weakTopics.join(', ')}. Hãy ôn tập lại lý thuyết các chủ đề này!`,
        priorityTopics: weakTopics
      };
    } else if (stats.totalMistakes > 0) {
      return {
        type: 'info',
        message: `📚 Bạn đã làm sai ${stats.totalMistakes} câu. Hãy tiếp tục luyện tập để cải thiện!`,
        priorityTopics: []
      };
    } else {
      return {
        type: 'success',
        message: `🎉 Chưa có lỗi sai nào! Bạn đang tiến bộ rất tốt. Hãy duy trì nhé!`,
        priorityTopics: []
      };
    }
  }

  // Kiểm tra tiến độ theo lớp
  checkProgressByGrade(grade, userProgress) {
    const expectedProgress = {
      '10': { min: 30, good: 60, excellent: 85 },
      '11': { min: 25, good: 55, excellent: 80 },
      '12': { min: 20, good: 50, excellent: 75 }
    };
    
    const gradeKey = grade.toString();
    const standards = expectedProgress[gradeKey] || expectedProgress['10'];
    
    let message = '';
    let type = '';
    
    if (userProgress >= standards.excellent) {
      type = 'excellent';
      message = `🌟 TUYỆT VỜI! Bạn đã đạt ${userProgress}% tiến độ, vượt mục tiêu lớp ${grade}. Hãy thử thách bản thân với bài tập nâng cao!`;
    } else if (userProgress >= standards.good) {
      type = 'good';
      message = `👍 KHÁ TỐT! Bạn đạt ${userProgress}% tiến độ, đáp ứng chuẩn lớp ${grade}. Cố gắng thêm ${standards.excellent - userProgress}% để đạt xuất sắc!`;
    } else if (userProgress >= standards.min) {
      type = 'medium';
      message = `📖 ĐANG CỐ GẮNG! Bạn đạt ${userProgress}% tiến độ. Hãy ôn tập thêm ${standards.good - userProgress}% để đạt mức khá!`;
    } else {
      type = 'warning';
      message = `⚠️ CẦN CỐ GẮNG HƠN! Bạn mới đạt ${userProgress}% tiến độ, dưới mức tối thiểu của lớp ${grade} (${standards.min}%). Hãy dành thêm thời gian học tập!`;
    }
    
    return { type, message, standards };
  }

  // Tạo báo cáo học tập
  generateReport(user, subjectProgress) {
    const mistakeStats = this.getMistakeStatistics();
    const gradeCheck = this.checkProgressByGrade(user.grade, subjectProgress);
    
    return {
      student: user.fullname,
      grade: user.grade,
      studyHours: user.stats.totalStudyHours || 0,
      completedQuestions: user.stats.completedLessons || 0,
      averageScore: user.stats.averageScore || 0,
      streak: user.stats.streak || 0,
      subjectProgress: subjectProgress,
      mistakes: mistakeStats,
      gradeAssessment: gradeCheck,
      recommendations: this.getStudySuggestion(),
      timestamp: new Date().toLocaleString()
    };
  }

  // Reset lỗi sai
  resetMistakes() {
    this.mistakeTracker = {};
    this.saveData();
    return { success: true, message: "Đã xóa lịch sử lỗi sai!" };
  }
}

// Khởi tạo AI Assistant toàn cục
const aiAssistant = new AIAssistant();

// Export cho các môi trường khác nhau
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AIAssistant, aiAssistant };
}