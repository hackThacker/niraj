# Basic Commands

1. `ls` (List): Lists files and directories in the current directory.
2. `cd` (Change Directory): Changes the current working directory.
3. `mkdir` (Make Directory): Creates a new directory.
4. `rm` (Remove): Deletes files or directories.
5. `cp` (Copy): Copies files or directories from one location to another.
6. `mv` (Move): Moves or renames files and directories.
7. `cat` (Concatenate): Displays the contents of a file.
8. `pwd` (Print Working Directory): Shows the current working directory.
9. `touch`: Creates an empty file.
10. `echo`: Prints text to the terminal.

# Intermediate Commands

1. `grep` (Global Regular Expression Print): Searches for text patterns in files.
2. `find`: Searches for files and directories in a directory hierarchy.
3. `tar` (Tape Archive): Archives and compresses files and directories.
4. `chmod` (Change Mode): Changes file permissions.
5. `chown` (Change Owner): Changes file ownership.
6. `ps` (Process Status): Lists running processes.
7. `kill`: Sends signals to processes to terminate them.
8. `ssh` (Secure Shell): Connects to remote servers securely.
9. `scp` (Secure Copy): Copies files securely between local and remote systems.
10. `curl` (Client for URLs): Downloads content from the internet.

# Advanced Commands

1. `sed` (Stream Editor): Processes and transforms text.
2. `awk`: A versatile text processing tool.
3. `rsync` (Remote Sync): Efficiently syncs files and directories.
4. `nc` (Netcat): A networking utility for reading or writing to network connections.
5. `iptables`: Configures firewall rules on Linux systems.
6. `dd` (Data Duplicator): Copies and converts data at a low level.
7. `lsof` (List Open Files): Lists open files and processes using them.
8. `top` or `htop`: Real-time system monitoring tools.
9. `cron` (Cron Jobs): Schedules automated tasks.
10. `grep` (with regular expressions): Advanced text searching and manipulation.

# Professional Commands

1. `strace` (System Trace): Monitors system calls and signals.
2. `tcpdump`: Captures and analyzes network packets.
3. `vmstat` (Virtual Memory Statistics): Provides system performance data.
4. `sar` (System Activity Reporter): Collects and reports system data.
5. `lvm` (Logical Volume Manager): Manages disk volumes and storage.
6. `rsyslog` or `syslog-ng`: Advanced system logging and event management.
7. `iptables` (with complex rules): Advanced firewall configuration.
8. `openssl`: Performs various cryptographic operations.
9. `ncdu` (NCurses Disk Usage): Analyzes disk space usage.
10. `dstat` (Resource Usage Statistics): Collects and displays system resource usage in real-time.


# Basic Commands

## File and Directory Management

1. `ls` (List):
   - **Description:** Lists files and directories in the current directory.
   - **Usage:** `ls -l` to display detailed file information.

2. `cd` (Change Directory):
   - **Description:** Changes the current working directory.
   - **Usage:** `cd /path/to/directory` to navigate to a specific directory.

3. `mkdir` (Make Directory):
   - **Description:** Creates a new directory.
   - **Usage:** `mkdir my_folder` to create a directory named "my_folder".

4. `rm` (Remove):
   - **Description:** Deletes files or directories.
   - **Usage:** `rm file.txt` to remove a file.

5. `cp` (Copy):
   - **Description:** Copies files or directories from one location to another.
   - **Usage:** `cp file.txt backup/` to copy "file.txt" to the "backup" directory.

6. `mv` (Move):
   - **Description:** Moves or renames files and directories.
   - **Usage:** `mv oldfile.txt newfile.txt` to rename a file.

7. `cat` (Concatenate):
   - **Description:** Displays the contents of a file.
   - **Usage:** `cat file.txt` to display the content of "file.txt".

8. `pwd` (Print Working Directory):
   - **Description:** Shows the current working directory.
   - **Usage:** `pwd` to display the current working directory.

9. `touch`:
   - **Description:** Creates an empty file.
   - **Usage:** `touch newfile.txt` to create a new empty file.

10. `echo`:
    - **Description:** Prints text to the terminal.
    - **Usage:** `echo "Hello, World!"` to print "Hello, World!" to the terminal.

## Intermediate Commands

## Text Processing and File Search

1. `grep` (Global Regular Expression Print):
   - **Description:** Searches for text patterns in files.
   - **Usage:** `grep "pattern" file.txt` to find lines containing "pattern" in "file.txt".

2. `find`:
   - **Description:** Searches for files and directories in a directory hierarchy.
   - **Usage:** `find /path/to/search -name "*.txt"` to find all ".txt" files.

3. `tar` (Tape Archive):
   - **Description:** Archives and compresses files and directories.
   - **Usage:** `tar -czvf archive.tar.gz directory/` to create a compressed archive.

4. `chmod` (Change Mode):
   - **Description:** Changes file permissions.
   - **Usage:** `chmod 755 file.txt` to give read, write, and execute permissions to the owner.

5. `chown` (Change Owner):
   - **Description:** Changes file ownership.
   - **Usage:** `chown user:group file.txt` to change the owner and group of a file.

6. `ps` (Process Status):
   - **Description:** Lists running processes.
   - **Usage:** `ps aux` to display a list of all processes.

7. `kill`:
   - **Description:** Sends signals to processes to terminate them.
   - **Usage:** `kill -9 PID` to forcefully terminate a process by its PID.

8. `ssh` (Secure Shell):
   - **Description:** Connects to remote servers securely.
   - **Usage:** `ssh user@hostname` to establish an SSH connection.

9. `scp` (Secure Copy):
   - **Description:** Copies files securely between local and remote systems.
   - **Usage:** `scp file.txt user@remote:/path/` to copy a file to a remote server.

10. `curl` (Client for URLs):
    - **Description:** Downloads content from the internet.
    - **Usage:** `curl -O https://example.com/file.txt` to download a file from a URL.

# Advanced Commands

## Text Manipulation and System Administration

1. `sed` (Stream Editor):
   - **Description:** Processes and transforms text.
   - **Usage:** `sed 's/old/new/g' file.txt` to replace "old" with "new" in "file.txt".

2. `awk`:
   - **Description:** A versatile text processing tool.
   - **Usage:** `awk '{print $1}' data.txt` to print the first field of each line in "data.txt".

3. `rsync` (Remote Sync):
   - **Description:** Efficiently syncs files and directories.
   - **Usage:** `rsync -av source/ destination/` to sync files from source to destination.

4. `nc` (Netcat):
   - **Description:** A networking utility for reading or writing to network connections.
   - **Usage:** `nc -l -p 12345` to listen on port 12345 for incoming connections.

5. `iptables`:
   - **Description:** Configures firewall rules on Linux systems.
   - **Usage:** `iptables -A INPUT -p tcp --dport 80 -j ACCEPT` to allow incoming HTTP traffic.

6. `dd` (Data Duplicator):
   - **Description:** Copies and converts data at a low level.
   - **Usage:** `dd if=inputfile of=outputfile bs=4k` to copy data with a block size of 4 KB.

7. `lsof` (List Open Files):
   - **Description:** Lists open files and processes using them.
   - **Usage:** `lsof -i :80` to list processes using port 80.

8. `top` or `htop`:
   - **Description:** Real-time system monitoring tools.
   - **Usage:** `top` to view a dynamic list of processes and their resource usage.

9. `cron` (Cron Jobs):
   - **Description:** Schedules automated tasks.
   - **Usage:** `crontab -e` to edit the user's crontab and schedule tasks.

10. `grep` (with regular expressions):
    - **Description:** Advanced text searching and manipulation.
    - **Usage:** `grep -E 'pattern' file.txt` to use extended regex patterns for searching.

# Professional Commands

## System Monitoring and Security

1. `strace` (System Trace):
   - **Description:** Monitors system calls and signals.
   - **Usage:** `strace -p PID` to trace system calls of a running process.

2. `tcpdump`:
   - **Description:** Captures and analyzes network packets.
   - **Usage:** `tcpdump -i eth0 -n port 80` to capture HTTP traffic on interface eth0.

3. `vmstat` (Virtual Memory Statistics):
   - **Description:** Provides system performance data.
   - **Usage:** `vmstat 1` to display system statistics at 1-second intervals.

4. `sar` (System Activity Reporter):
   - **Description:** Collects and reports system data.
   - **Usage:** `sar -u 1 3` to report CPU utilization every 1 second for 3 times.

5. `lvm` (Logical Volume Manager):
   - **Description:** Manages disk volumes and storage.
   - **Usage:** `lvcreate -L 1G -n myvolume myvg` to create a logical volume.

6. `rsyslog` or `syslog-ng`:
   - **Description:** Advanced system logging and event management.
   - **Usage:** Configure logging and log rotation for system events.

7. `iptables` (with complex rules):
   - **Description:** Advanced firewall configuration.
   - **Usage:** Create complex firewall rulesets to secure a server.

8. `openssl`:
   - **Description:** Performs various cryptographic operations.
   - **Usage:** Generate SSL certificates, encrypt/decrypt files, and more.

9. `ncdu` (NCurses Disk Usage):
   - **Description:** Analyzes disk space usage.
   - **Usage:** `ncdu /path/to/directory` to analyze disk usage interactively.

10. `dstat` (Resource Usage Statistics):
    - **Description:** Collects and displays system resource usage in real-time.
    - **Usage:** `dstat -cdlmnpsy` to display a comprehensive system resource report.
