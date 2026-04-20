// auth.js - Hệ thống xác thực và quản lý người dùng hoàn chỉnh

// Khởi tạo database users nếu chưa có
function initUserDatabase() {
    if (!localStorage.getItem('users')) {
        const defaultUsers = [
            {
                id: '1',
                fullname: 'Nguyễn Minh Anh',
                email: 'minhanh@example.com',
                password: '123456',
                grade: '11',
                phone: '0987654321',
                createdAt: new Date().toISOString(),
                avatar: 'MA',
                isAdmin: false,
                stats: {
                    totalStudyHours: 45.5,
                    completedLessons: 320,
                    averageScore: 7.8,
                    streak: 7,
                    lastStudyDate: new Date().toDateString(),
                    subjects: {
                        math: { progress: 72, weakness: ['Lượng giác', 'Hàm số'] },
                        physics: { progress: 58, weakness: ['Điện xoay chiều', 'Dao động'] },
                        literature: { progress: 85, weakness: [] },
                        english: { progress: 64, weakness: ['Thì', 'Phrasal verbs'] },
                        math11: { progress: 0, weakness: [] },
                        math12: { progress: 0, weakness: [] },
                        chemistry: { progress: 0, weakness: [] }
                    }
                }
            },
            {
                id: '2',
                fullname: 'Trần Thị Bích',
                email: 'bich.tran@example.com',
                password: '123456',
                grade: '12',
                phone: '0912345678',
                createdAt: new Date().toISOString(),
                avatar: 'TB',
                isAdmin: false,
                stats: {
                    totalStudyHours: 62.3,
                    completedLessons: 480,
                    averageScore: 8.2,
                    streak: 14,
                    lastStudyDate: new Date().toDateString(),
                    subjects: {
                        math: { progress: 85, weakness: ['Tích phân'] },
                        physics: { progress: 76, weakness: ['Cơ học'] },
                        literature: { progress: 90, weakness: [] },
                        english: { progress: 72, weakness: ['Viết luận'] },
                        math11: { progress: 0, weakness: [] },
                        math12: { progress: 0, weakness: [] },
                        chemistry: { progress: 0, weakness: [] }
                    }
                }
            }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
}

// Hàm đảm bảo luôn có tài khoản admin
function ensureAdminExists() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const adminExists = users.find(u => u.email === 'admin@example.com');
    
    if (!adminExists) {
        const adminUser = {
            id: 'admin_' + Date.now(),
            fullname: 'Quản trị viên',
            email: 'admin@example.com',
            password: 'admin123',
            grade: 'Admin',
            phone: '0123456789',
            createdAt: new Date().toISOString(),
            avatar: 'AD',
            isAdmin: true,
            stats: {
                totalStudyHours: 0,
                completedLessons: 0,
                averageScore: 0,
                streak: 0,
                lastStudyDate: null,
                subjects: {
                    math: { progress: 0, weakness: [] },
                    physics: { progress: 0, weakness: [] },
                    literature: { progress: 0, weakness: [] },
                    english: { progress: 0, weakness: [] },
                    math11: { progress: 0, weakness: [] },
                    math12: { progress: 0, weakness: [] },
                    chemistry: { progress: 0, weakness: [] }
                }
            }
        };
        users.push(adminUser);
        localStorage.setItem('users', JSON.stringify(users));
        console.log('✅ Đã thêm tài khoản admin vào hệ thống!');
    }
}

// Lấy thông tin user hiện tại đang đăng nhập
function getCurrentUser() {
    const userJson = localStorage.getItem('currentUser');
    if (!userJson) return null;
    try {
        return JSON.parse(userJson);
    } catch (e) {
        return null;
    }
}

// Kiểm tra trạng thái đăng nhập
function isLoggedIn() {
    return getCurrentUser() !== null;
}

// Kiểm tra có phải admin không
function isAdmin() {
    const user = getCurrentUser();
    return user && user.isAdmin === true;
}

// Đăng nhập
function login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                const { password: _, ...safeUser } = user;
                localStorage.setItem('currentUser', JSON.stringify(safeUser));
                resolve({ success: true, user: safeUser });
            } else {
                reject({ success: false, message: 'Email hoặc mật khẩu không đúng!' });
            }
        }, 500);
    });
}

// Đăng ký tài khoản mới
function register(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            const existingUser = users.find(u => u.email === userData.email);
            if (existingUser) {
                reject({ success: false, message: 'Email này đã được đăng ký!' });
                return;
            }
            
            const newUser = {
                id: Date.now().toString(),
                fullname: userData.fullname,
                email: userData.email,
                password: userData.password,
                grade: userData.grade,
                phone: userData.phone || '',
                createdAt: new Date().toISOString(),
                avatar: userData.fullname.split(' ').pop().substring(0, 2).toUpperCase(),
                isAdmin: false,
                stats: {
                    totalStudyHours: 0,
                    completedLessons: 0,
                    averageScore: 0,
                    streak: 0,
                    lastStudyDate: null,
                    subjects: {
                        math: { progress: 0, weakness: [] },
                        physics: { progress: 0, weakness: [] },
                        literature: { progress: 0, weakness: [] },
                        english: { progress: 0, weakness: [] },
                        math11: { progress: 0, weakness: [] },
                        math12: { progress: 0, weakness: [] },
                        chemistry: { progress: 0, weakness: [] }
                    }
                }
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            const { password: _, ...safeUser } = newUser;
            localStorage.setItem('currentUser', JSON.stringify(safeUser));
            
            resolve({ success: true, user: safeUser });
        }, 500);
    });
}

// Đăng xuất
function logout() {
    localStorage.removeItem('currentUser');
}

// ========== HÀM QUẢN LÝ AVATAR ==========

// Cập nhật avatar người dùng
function updateUserAvatar(avatarDataUrl) {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex !== -1) {
        localStorage.setItem(`avatar_${currentUser.id}`, avatarDataUrl);
        users[userIndex].avatarUrl = avatarDataUrl;
        localStorage.setItem('users', JSON.stringify(users));
        
        const { password: _, ...safeUser } = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(safeUser));
        
        return true;
    }
    return false;
}

// Lấy avatar người dùng
function getUserAvatar(userId = null) {
    const id = userId || getCurrentUser()?.id;
    if (!id) return null;
    
    const savedAvatar = localStorage.getItem(`avatar_${id}`);
    if (savedAvatar) return savedAvatar;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.id === id);
    if (foundUser) {
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(foundUser.fullname)}&background=3b82f6&color=fff&size=150&rounded=true`;
    }
    
    return null;
}

// Cập nhật tên người dùng
function updateUserFullname(newFullname) {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex !== -1) {
        users[userIndex].fullname = newFullname;
        users[userIndex].avatar = newFullname.split(' ').pop().substring(0, 2).toUpperCase();
        localStorage.setItem('users', JSON.stringify(users));
        
        const existingAvatar = localStorage.getItem(`avatar_${currentUser.id}`);
        if (!existingAvatar) {
            localStorage.removeItem(`avatar_${currentUser.id}`);
        }
        
        const { password: _, ...safeUser } = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(safeUser));
        
        return true;
    }
    return false;
}

// Xóa avatar tùy chỉnh
function resetUserAvatar() {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    localStorage.removeItem(`avatar_${currentUser.id}`);
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        const { password: _, ...safeUser } = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(safeUser));
    }
    
    return true;
}

// ========== HÀM CẬP NHẬT THỐNG KÊ ==========

// Cập nhật tiến độ môn học sau khi làm bài
function updateSubjectProgress(subjectId, correctAnswers, totalQuestions, timeSpentMinutes = 5) {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.isAdmin) return false;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex !== -1) {
        const currentCompleted = users[userIndex].stats.completedLessons || 0;
        users[userIndex].stats.completedLessons = currentCompleted + totalQuestions;
        
        const currentHours = users[userIndex].stats.totalStudyHours || 0;
        users[userIndex].stats.totalStudyHours = currentHours + timeSpentMinutes / 60;
        
        const currentAvg = users[userIndex].stats.averageScore || 0;
        const newScore = (correctAnswers / totalQuestions) * 10;
        const totalQuizzes = Math.floor(currentCompleted / totalQuestions) + 1;
        users[userIndex].stats.averageScore = Math.round(((currentAvg * (totalQuizzes - 1) + newScore) / totalQuizzes) * 10) / 10;
        
        let increment = (correctAnswers / totalQuestions) * 20;
        increment = Math.min(20, increment);
        
        const subjectMap = {
            'toan10': 'math',
            'toan11': 'math11',
            'toan12': 'math12',
            'ly10': 'physics',
            'hoa10': 'chemistry',
            'anh10': 'english'
        };
        
        const subjectKey = subjectMap[subjectId];
        if (subjectKey && users[userIndex].stats.subjects[subjectKey]) {
            const currentProgress = users[userIndex].stats.subjects[subjectKey].progress || 0;
            const newProgress = Math.min(100, currentProgress + increment);
            users[userIndex].stats.subjects[subjectKey].progress = Math.round(newProgress);
        }
        
        const lastStudy = users[userIndex].stats.lastStudyDate;
        const today = new Date().toDateString();
        if (lastStudy === today) {
            // Không tăng streak
        } else if (lastStudy && new Date(lastStudy).getTime() === new Date(Date.now() - 86400000).toDateString()) {
            users[userIndex].stats.streak = (users[userIndex].stats.streak || 0) + 1;
        } else {
            users[userIndex].stats.streak = 1;
        }
        users[userIndex].stats.lastStudyDate = today;
        
        localStorage.setItem('users', JSON.stringify(users));
        
        const { password: _, ...safeUser } = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(safeUser));
        
        return true;
    }
    return false;
}

// Lấy thống kê chi tiết
function getUserStats() {
    const user = getCurrentUser();
    if (!user) return null;
    return {
        totalStudyHours: user.stats.totalStudyHours || 0,
        completedLessons: user.stats.completedLessons || 0,
        averageScore: user.stats.averageScore || 0,
        streak: user.stats.streak || 0,
        mathProgress: user.stats.subjects.math.progress || 0,
        math11Progress: user.stats.subjects.math11?.progress || 0,
        math12Progress: user.stats.subjects.math12?.progress || 0,
        physicsProgress: user.stats.subjects.physics.progress || 0,
        englishProgress: user.stats.subjects.english.progress || 0
    };
}

// Cập nhật thông tin người dùng
function updateUserProfile(updatedData) {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedData };
        localStorage.setItem('users', JSON.stringify(users));
        
        const { password: _, ...safeUser } = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(safeUser));
        return true;
    }
    return false;
}

// Lấy danh sách tất cả người dùng (cho admin)
function getAllUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

// Xóa người dùng (cho admin)
function deleteUser(userId) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const filteredUsers = users.filter(u => u.id !== userId);
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.id === userId) {
        logout();
    }
    return true;
}

// Khởi tạo database
initUserDatabase();
ensureAdminExists();

// Export ra global
window.getCurrentUser = getCurrentUser;
window.isLoggedIn = isLoggedIn;
window.isAdmin = isAdmin;
window.login = login;
window.register = register;
window.logout = logout;
window.updateSubjectProgress = updateSubjectProgress;
window.getUserStats = getUserStats;
window.updateUserProfile = updateUserProfile;
window.updateUserAvatar = updateUserAvatar;
window.getUserAvatar = getUserAvatar;
window.updateUserFullname = updateUserFullname;
window.resetUserAvatar = resetUserAvatar;
window.getAllUsers = getAllUsers;
window.deleteUser = deleteUser;