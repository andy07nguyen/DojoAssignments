puts 'I am in the back account file'

class BankAccount
  # your code here
  attr_reader :account_number, :checking, :saving

  @@bank_accounts = 0

  def initialize
    @account_number = create_account
    @checking = 0
    @saving = 0
    @@bank_accounts += 1
    # not accessible since we do not have a reader for it
    @interest_rate = 0.01
  end

  def deposit(account, amount)
    if accout.downcase == "checking"
      @checking += amount
    else
      @saving += amount
    end
  end

  def withdrawal(account, amount)
    if account.downcase == "checking"
      if @checking = amount < 0
        raise "Insufficient Funds, you have #{@checking} in your account"
      else
        @checking -= amount
      end
      if @saving = amount < 0
        raise "Insufficient Funds, you have #{@saving} in your account"
      else
        @saving -= amount
      end
    end
  end

  def total_balance
    "CHECKING ACCOUNT: #{@checking}\nSAVING ACCOUNT: #{@saving}\nTOTAL BALANCE: #{@checking + @saving}"
    puts "CHECKING ACCOUNT: #{@checking}\nSAVING ACCOUNT: #{@saving}\nTOTAL BALANCE: #{@checking + @saving}"
  end

  def account_information
    "ACCOUNT NUMBER: #{@account_number}\nINTEREST RATE: #{@interest_rate}\n #{self.total_balance}"
    puts "ACCOUNT NUMBER: #{@account_number}\nINTEREST RATE: #{@interest_rate}\n#{self.total_balance}"
  end

  def self.number_of_accounts
    @@bank_accounts
  end

  def display_account
    puts "ACCOUNT: #{@account_number}"
  end

  private
    def create_account
      Array.new(10).map { rand(0..9) }.join
    end
end

userAccount = BankAccount.new
userAccount.display_account
userAccount.total_balance
userAccount.account_information
