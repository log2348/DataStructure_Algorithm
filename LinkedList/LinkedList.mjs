class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    /**
     * 모든 데이터 출력
     */
    printAll() {
        let currentNode = this.head;
        let text = "{";

        while (currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if (currentNode != null) {
                text += ", ";
            }
        }

        text += "}";
        console.log(text);
    }

    /**
     * 모든 데이터 제거
     */
    clear() {
        this.head = null;
        this.count = 0;
    }

    /**
     * 특정 인덱스 삽입
     * @param {*} index 
     * @param {*} data 
     */
    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);

        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }

        this.count++;
    }

    /**
     * 마지막 인덱스 삽입
     * @param {*} data 
     */
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    /**
     * 특정 인덱스 삭제
     * @param {*} index 
     * @returns 
     */
    deleteAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error("제거할 수 없습니다.");
        }

        let currentNode = this.head;

        // 헤더 노드를 제거할 경우
        if (index == 0) {
            let deletedNode = this.head;
            this.head = this.head.next;
            this.count--;

            return deletedNode;
        } else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            let deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;

            return deletedNode;
        }
    }

    /**
     * 마지막 인덱스 삭제
     */
    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    /**
     * 특정 인덱스 읽기
     * @param {*} index 
     * @returns 
     */
    getNodeAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, LinkedList };