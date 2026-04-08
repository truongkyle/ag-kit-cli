#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { program } = require('commander');
const chalk = require('chalk');
const ora = require('ora');

const packageJson = require('../package.json');

program
  .name('ag-kit')
  .description('Trình khởi tạo Antigravity Agent Kit (Antigravity Agent Kit Initializer)')
  .version(packageJson.version);

program
  .command('init')
  .description('Khởi tạo thư mục bộ não AI (Initialize the AI Brain directory)')
  .option('-f, --force', 'Ghi đè/Làm mới nếu đã tồn tại (Overwrite/Clean if exists)')
  .action(async (options) => {
    const targetDir = path.join(process.cwd(), '.agent');
    const sourceDir = path.join(__dirname, '..', 'template', '.agent');

    console.log(chalk.cyan(`\n✨ Khởi động tiến trình cài đặt | Starting initialization for @xaviele/ag-kit\n`));

    // Check if source exists
    if (!fs.existsSync(sourceDir)) {
      console.log(chalk.red(`❌ Lỗi | Error: Không tìm thấy thư viện mẫu tại | Source template not found at ${sourceDir}`));
      process.exit(1);
    }

    // Check if target exists
    if (fs.existsSync(targetDir) && !options.force) {
      console.log(chalk.yellow(`⚠️ Cảnh báo | Warning: Thư mục .agent đã tồn tại ở đây (The .agent folder already exists here).`));
      console.log(`Hãy chạy kèm cờ ${chalk.green('--force')} nếu bạn muốn ghi đè đè code cũ (Use the ${chalk.green('--force')} flag to overwrite).\n`);
      process.exit(1);
    }

    const spinner = ora('Đang sao chép các kỹ năng | Copying skills & workflows (45 Skills, 12 Workflows)...').start();

    try {
      if (options.force && fs.existsSync(targetDir)) {
        spinner.text = 'Đang dọn dẹp hệ thống cũ | Cleaning up old workspace...';
        await fs.remove(targetDir);
      }
      
      spinner.text = 'Đang tiến hành nhân bản dữ liệu | Cloning data...';
      await fs.copy(sourceDir, targetDir);
      
      spinner.succeed(chalk.green('Thành công! Toàn bộ hệ thống Antigravity Agent Kit (.agent) đã được cài đặt | Success! System workspace installed.'));
      
      console.log(`\n${chalk.white.bold('Tiếp theo bạn có thể | Next steps:')}`);
      console.log(`👉 Chạy lệnh ${chalk.cyan('npx @xaviele/ag-kit update')} (Tính năng sắp ra mắt | Coming soon)`);
      console.log(`👉 Cấu hình Rule ở hộp thoại ${chalk.yellow('.agent/rules/')} (Config custom rules)\n`);
      
    } catch (err) {
      spinner.fail(chalk.red('Quá trình sao chép thất bại! | Installation failed!'));
      console.error(err);
      process.exit(1);
    }
  });

program
  .command('add <skillName>')
  .description('Thêm một kỹ năng lẻ vào dự án (Add a single skill into project)')
  .action(async (skillName) => {
    const targetBaseDir = path.join(process.cwd(), '.agent');
    const targetSkillDir = path.join(targetBaseDir, 'skills', skillName);
    const sourceSkillDir = path.join(__dirname, '..', 'template', '.agent', 'skills', skillName);

    console.log(chalk.cyan(`\n✨ Đang tải nhánh kỹ năng | Downloading skill branch [${skillName}] bằng hệ thống @xaviele/ag-kit\n`));

    // LỰA CHỌN 2: Ép buộc phải có thư mục hệ thống trước
    if (!fs.existsSync(targetBaseDir)) {
      console.log(chalk.red(`❌ TỪ CHỐI | ACCESS DENIED: Dự án của bạn chưa thiết lập cấu trúc lõi (Core workflow not initialized).`));
      console.log(`💡 Vui lòng tạo nền tảng móng trước bằng lệnh (Please initialize first using): ${chalk.green('npx @xaviele/ag-kit init')}\n`);
      process.exit(1);
    }

    // Kiểm tra kỹ năng có tồn tại trong template kho hay không?
    if (!fs.existsSync(sourceSkillDir)) {
      console.log(chalk.red(`❌ Lỗi 404 | Error 404: Không tìm thấy kỹ năng (Skill not found) '${skillName}'.`));
      process.exit(1);
    }

    // Kiểm tra tránh ghi đè lỗi lầm vào Source đã có
    if (fs.existsSync(targetSkillDir)) {
      console.log(chalk.yellow(`⚠️ Báo động | Alert: Kỹ năng (Skill) '${skillName}' đã tồn tại! Từ chối ghi đè để bảo vệ Code (Skipped to protect code).`));
      process.exit(1);
    }

    const spinner = ora(`Đang giải nén mã nguồn kỹ năng | Extracting skill data ${skillName}...`).start();

    try {
      await fs.copy(sourceSkillDir, targetSkillDir);
      spinner.succeed(chalk.green(`Tuyệt vời! Kỹ năng | Awesome! Skill '${skillName}' đã trang bị thành công (installed successfully).`));
      console.log(`👉 Cài tại thư mục (Installed at): ${chalk.cyan('.agent/skills/' + skillName)}\n`);
    } catch (err) {
      spinner.fail(chalk.red(`Lỗi giải nén kỹ năng! | Extraction failed for ${skillName}!`));
      console.error(err);
      process.exit(1);
    }
  });

program
  .command('update')
  .description('Đồng bộ bộ Kỹ năng gốc từ hệ thống (Sync core skills from the system registry)')
  .action(async () => {
    const targetBaseDir = path.join(process.cwd(), '.agent');
    const sourceDir = path.join(__dirname, '..', 'template', '.agent');

    console.log(chalk.cyan(`\n✨ Đang khởi chạy tính năng UPDATE đồng bộ từ @xaviele/ag-kit\n`));

    // Yêu cầu phải có .agent
    if (!fs.existsSync(targetBaseDir)) {
      console.log(chalk.red(`❌ LỖI ĐỒNG BỘ | UPDATE FAILED: Dự án của bạn chưa từng được thiết lập móng .agent lõi.`));
      console.log(`💡 Vui lòng dùng lệnh: ${chalk.green('npx @xaviele/ag-kit init')} trước tiên.\n`);
      process.exit(1);
    }

    const spinner = ora('Phân tích cập nhật, tạo khiên bảo vệ Cấu hình dự án (User Rules / Configs)...').start();

    // Thuật toán màng lọc (Immunity Shield)
    const filterSync = (src, dest) => {
      const srcName = path.basename(src);
      // Danh sách các Item bất khả xâm phạm nếu đã tồn tại đẻ bảo vệ Config của Khách Hàng
      const protectedItems = [
        'rules', 
        'scratch', 
        'ARCHITECTURE.md', 
        'mcp_config.json', 
        '.system_generated'
      ];
      
      // Nếu folder/file thuộc diện bảo vệ và ĐÃ TỒN TẠI ở máy khách -> BLOCK Không cho đè
      if (protectedItems.includes(srcName) && fs.existsSync(dest)) {
        return false;
      }
      return true; // Mọi thứ khác như skills/, workflows/ được cấp phép update đè
    };

    try {
      await fs.copy(sourceDir, targetBaseDir, {
        overwrite: true,
        filter: filterSync
      });
      spinner.succeed(chalk.green(`Tuyệt vời! Toàn bộ 45 Skills và 12 Workflows đã được Cập Nhập (Sync) mới nhất.`));
      console.log(`👉 Các hệ thống cá nhân hóa (ARCHITECTURE.md, mcp_config.json, rules) được bảo toàn tuyệt đối 100%.\n`);
    } catch (err) {
      spinner.fail(chalk.red(`Đồng bộ thất bại! | Sync failed!`));
      console.error(err);
      process.exit(1);
    }
  });

program.parse(process.argv);
